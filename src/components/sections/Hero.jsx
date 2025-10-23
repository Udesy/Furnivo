"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import ProjectPreview from "../ui/ProjectPreview";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Hero({ previewData }) {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(containerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }).to(
        imageRef.current,
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      );

      textRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: 1 });
        const split = new SplitText(el, { type: "lines", linesClass: "lines" });
        gsap.set(split.lines, { yPercent: 100, opacity: 0 });
        tl.to(
          split.lines,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.05,
          },
          i === 0 ? "-=0.4" : "<0.3"
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-svh p-space-md rounded-b-2xl overflow-hidden">
      <div className="inset-0 absolute w-full h-full -z-10 bg-black">
        <div
          className="relative h-full w-full bg-black will-change-transform transition-transform scale-120 opacity-0"
          ref={containerRef}
        >
          <Image
            src={"/images/heroImage.jpg"}
            alt={"Hero Section Image"}
            fill
            className="object-center will-change-transform transition-opacity opacity-0"
            ref={imageRef}
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.4)_100%)]"></div>
      <div className="relative inset-0 w-full h-full flex flex-col md:justify-between justify-end md:gap-0 gap-8">
        <div className="relative w-full h-fit lg:mt-44 md:mt-32 overflow-hidden">
          <h1
            className="hero-text opacity-0"
            ref={(el) => (textRef.current[0] = el)}
          >
            Elevate your space <br /> with stylish comfort.
          </h1>
        </div>
        <div className="relative w-full h-fit flex justify-between items-end">
          <ProjectPreview data={previewData} />
          <div className="w-fit h-fit flex flex-col gap-8 overflow-hidden">
            <h2
              className="body-text text-3 opacity-0"
              ref={(el) => (textRef.current[1] = el)}
            >
              Furniture designed to bring ease — <br /> and elegance to your
              home.
            </h2>
            <CTAButton size="lg" variant="secondary" className="inline-flex">
              Enquiry Now
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
