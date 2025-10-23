"use client";

import { preview_images } from "@/app/constants";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const placeholder_value = [
  {
    src: "/images/slides_image/slide-1.jpg",
    alt: "Placeholder",
    text: "Minimalistic and Elegance look",
    subtext: "Living Room",
  },
];

export default function ProjectPreview({ data = placeholder_value }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState([0, 0, 0]);
  const animationRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % preview_images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setProgress((prev) =>
      prev.map((p, i) => (i === current ? 0 : i < current ? 100 : 0))
    );

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / 5000) * 100, 100);

      setProgress((prev) =>
        prev.map((p, i) => (i === current ? percent : i < current ? 100 : 0))
      );

      if (percent < 100) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [current]);

  return (
    <div className="flex-col gap-4 hidden md:flex">
      <h5 className="text-white lg:text-sm md:text-xs">Our Best Designs</h5>
      <div className="backdrop-blur-xs bg-white/20 p-2.5 lg:w-80 md:w-64 h-fit rounded-xl flex flex-row gap-5">
        <div className="relative lg:min-w-28 lg:min-h-28 md:min-h-20 md:min-w-20 rounded-lg overflow-hidden">
          <Image
            src={data[current].src}
            alt={data[current].alt}
            fill
            priority
            className="object-cover transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-end gap-6">
          <div className="flex flex-col lg:gap-2 md:gap-1.5">
            <h3 className="text-white lg:text-sm md:text-xs leading-tight transition-transform duration-300">
              {data[current].text}
            </h3>
            <h5 className="text-neutral-400 lg:text-xs md:text-[0.6rem] transition-transform duration-300">
              {data[current].subText}
            </h5>
          </div>
          <div className="flex flex-row justify-between gap-1">
            {progress.map((p, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full overflow-hidden h-0.5 ${i === current ? "bg-white/50" : "bg-white/30"}`}
              >
                <div
                  className={`h-full  ${i === current ? "transition-[width] duration-100 ease-linear bg-white" : "bg-white/30"} `}
                  style={{ width: `${p}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
