import Image from "next/image";
import React from "react";

export default function About({ content }) {
  return (
    <div
      className="relative w-full mt-[clamp(3.5rem,calc(2.045rem+7.273vw),7.5rem)] flex flex-col sm:gap-12 gap-10 lg:hidden"
      style={{ minHeight: `${content.length * 450}px` }}
    >
      {content.map(({ id, h1, p, src }) => (
        <div
          key={id}
          className="w-full flex flex-col rounded-[1.25rem] overflow-hidden bg-primary border border-neutral-400/85"
        >
          <div className="relative flex flex-col justify-between gap-40 p-[clamp(1rem,calc(0.818rem+0.909vw),1.5rem)]">
            <h1 className="w-full heading-1">{h1}</h1>
            <p className="w-[60%] about-body">{p}</p>
          </div>
          <div className="relative md:h-60 h-40 rounded-[20px] overflow-hidden">
            <Image src={src} fill alt="Image" />
          </div>
        </div>
      ))}
    </div>
  );
}
