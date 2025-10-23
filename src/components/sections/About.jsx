"use client";

import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import Mobile_About from "./Mobile_About";
import { about_content } from "@/app/constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Initialize text splitting
      const textSplit = new SplitText(textRef.current, { type: "lines" });
      gsap.set(textSplit.lines, { yPercent: 100, opacity: 0 });
      gsap.to(textSplit.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
      const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
      textElements.forEach((element) => {
        const split = new SplitText(element, {
          type: "lines",
          linesClass: "line",
        });
        split.lines.forEach(
          (line) => (line.innerHTML = `<span>${line.textContent}</span>`)
        );
      });

      // Set initial positions (CRITICAL - prevents jumps)
      gsap.set(".col-2", { x: "100%" });
      gsap.set(".col-3", { y: "100%" });
      gsap.set(".col-4", { y: "100%" });
      gsap.set(".col-img-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
      gsap.set(".col-img-2 img", { scale: 1.25 });
      gsap.set(".col-3 .col-content-wrapper .line span", { y: "0%" });
      gsap.set(".col-3 .col-content-wrapper-2 .line span", { y: "-125%" });

      const masterTimeline = gsap.timeline({ paused: true });

      // Phase 1: 0% to 50%
      masterTimeline
        .to(
          ".col-1",
          { opacity: 0, scale: 0.75, duration: 1, ease: "power2.inOut" },
          0
        )
        .to(".col-2", { x: "0%", duration: 1, ease: "power2.inOut" }, 0)
        .to(".col-3", { y: "0%", duration: 1, ease: "power2.inOut" }, 0)
        .to(
          ".col-img-1 img",
          { scale: 1.25, duration: 1, ease: "power2.inOut" },
          0
        )
        .to(
          ".col-img-2",
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          ".col-img-2 img",
          { scale: 1, duration: 1, ease: "power2.inOut" },
          0
        )

        // Phase 2: 50% to 100% - ADD HORIZONTAL MOVEMENT FOR COL-3
        .to(
          ".col-2",
          { opacity: 0, scale: 0.75, duration: 1, ease: "power2.inOut" },
          1
        )
        .to(".col-3", { x: "-1%", duration: 1, ease: "power2.inOut" }, 1)
        .to(".col-4", { y: "0%", duration: 1, ease: "power2.inOut" }, 1)
        .to(
          ".col-3 .col-content-wrapper .line span",
          {
            y: "-125%",
            duration: 0.8,
            ease: "power2.inOut",
          },
          1
        )
        .to(
          ".col-3 .col-content-wrapper-2 .line span",
          {
            y: "0%",
            duration: 0.8,
            delay: 0.2,
            ease: "power2.inOut",
          },
          1
        );

      timelineRef.current = masterTimeline;

      // Single ScrollTrigger with scrub (SMOOTH!)
      ScrollTrigger.create({
        trigger: ".sticky-cols",
        start: "top top",
        end: `+=${window.innerHeight * 3}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1, // This makes it smooth and removes lag
        animation: masterTimeline,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" id="About">
      <div className="flex flex-col gap-[clamp(2rem,calc(1.273rem+3.636vw),4rem)]">
        <div className="w-full">
          <p className="text-base text-accent">[About Us]</p>
        </div>
        <div className="w-full grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-5">
          <h1
            className="heading-1 text-black lg:col-span-9 md:col-span-7 col-span-4"
            ref={textRef}
          >
            Founded with a vision to blend style and comfort, Furnivo creates
            furniture that feels like home functional, beautifully designed
            pieces that make everyday living effortless and truly yours.
          </h1>
        </div>
      </div>
      <div className="sticky-cols hidden lg:block lg:mt-[clamp(7.5rem,calc(6.773rem+3.636vw),9.5rem)] relative w-full h-[100svh] overflow-hidden">
        <div className="sticky-cols-wrapper">
          <div className="col col-1">
            <div className="col-content">
              <div className="col-content-wrapper">
                <h1 className="about-heading-1">{about_content[0].h1}</h1>
                <p className="about-body">{about_content[0].p}</p>
              </div>
            </div>
          </div>
          <div className="col col-2">
            <div className="col-img col-img-1">
              <div className="col-img-wrapper">
                <img
                  src="/images/about-section/image-1.jpg"
                  alt="About image 1"
                />
              </div>
            </div>
            <div className="col-img col-img-2">
              <div className="col-img-wrapper">
                <img
                  src="/images/about-section/image-2.jpg"
                  alt="About image 2"
                />
              </div>
            </div>
          </div>
          <div className="col col-3">
            <div className="col-content-wrapper">
              <h1 className="about-heading-1">{about_content[1].h1}</h1>
              <p className="about-body">{about_content[1].p}</p>
            </div>
            <div className="col-content-wrapper-2">
              <h1 className="about-heading-1">{about_content[2].h1}</h1>
              <p className="about-body">{about_content[2].p}</p>
            </div>
          </div>
          <div className="col col-4">
            <div className="col-img">
              <div className="col-img-wrapper">
                <img
                  src="/images/about-section/image-3.jpg"
                  alt="About image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobile_About content={about_content} />
    </section>
  );
};

export default About;
