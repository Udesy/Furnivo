"use client";

import { bento_card } from "@/app/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ data }) => {
  const mobileContainerRef = useRef(null);
  const mobileCardRef = useRef(null);

  useLayoutEffect(() => {
    const mobileContainer = mobileContainerRef.current;
    const mobileCard = mobileCardRef.current;

    if (!mobileContainer || !mobileCard) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let { isTablet, isMobile } = context.conditions;

          const totalScroll = mobileCard.scrollWidth - window.innerWidth;
          let multiplier = 1;

          if (isTablet) {
            multiplier = 2.25;
          } else if (isMobile) {
            multiplier = 1.8;
          }

          gsap.to(mobileCard, {
            x: () => -totalScroll * multiplier,
            ease: "none",
            scrollTrigger: {
              trigger: mobileContainer,
              start: "top 20%",
              end: () => `+=${totalScroll}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      );
    }, mobileCard);

    return () => ctx.revert();
  }, []);

  return (
    <section className="lg:h-svh" id="Gallery">
      {/* Desktop - Static Grid (No animation) */}
      <div className="w-full h-full hidden lg:grid grid-cols-12 gap-5 px-14 py-4">
        {data.map(({ slug, className, src, imageDescription }) => (
          <div className={`${className} relative`} key={slug}>
            <Image src={src} fill alt="Bento Image" className="object-cover" />
            <div className="absolute bottom-5 left-5 px-2.5 py-1.5 w-fit h-fit backdrop-blur-xs bg-white/20 rounded-full">
              <h3 className="text-white text-lg">{imageDescription}</h3>
            </div>
          </div>
        ))}
      </div>
      <div
        className="h-full w-full lg:hidden flex items-center overflow-x-hidden"
        ref={mobileContainerRef}
      >
        <div
          className="w-fit h-fit flex flex-row space-x-12 items-center translate-x-[clamp(500px,calc(190.807px+81.366vw),1024px)]"
          ref={mobileCardRef}
        >
          {data.map(({ slug, src, imageDescription }) => (
            <div
              key={slug}
              className="relative h-[420px] w-[320px] rounded-[20px] overflow-hidden"
            >
              <Image
                src={src}
                fill
                alt="Bento Image"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 px-2.5 py-1.5 w-fit h-fit backdrop-blur-xs bg-white/20 rounded-full">
                <h3 className=" text-white text-lg">{imageDescription}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
