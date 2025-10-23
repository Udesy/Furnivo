"use client";

import React, { useState } from "react";
import clsx from "clsx";
import ArrowSVG from "./ArrowSVG";

const CTAButton = ({
  size = "md",
  variant = "primary",
  className = "",
  showMenu = false,
  onClick,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    onClick?.();
  };

  const base = `flex-row w-fit rounded-full items-center justify-between gap-auto group cursor-pointer transition-transform duration-400 ease-in-out text-nowrap ${className}`;

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "md:pr-1 md:pl-4 md:py-1 md:text-base md:gap-10 pr-0.5 pl-3 py-0.5 text-[0.8rem] gap-5",
    lg: "md:pr-1 pr-0.5 md:pl-5 pl-3 md:py-1 py-0.5 lg:text-xl lg:gap-12 md:text-[1rem] md:gap-10 text-[0.8rem] gap-6",
  };

  const box = {
    sm: "w-4 h-4",
    md: "md:w-10 md:h-10 md:p-2.5 w-8 h-8 p-1",
    lg: "lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 lg:p-3 md:p-2 p-1",
  };

  const arrow = {
    sm: "size-2",
    md: "size-6",
    lg: "lg:size-7 md:size-6 size-4",
  };

  const variants = {
    primary: "bg-primary text-black",
    secondary: "bg-secondary text-black",
  };
  return (
    <button
      onClick={handleClick}
      className={clsx(base, sizes[size], variants[variant])}
      {...props}
    >
      {children}
      <div
        className={clsx(
          box[size],
          "bg-accent rounded-full flex flex-col justify-center items-center overflow-hidden transition-transform duration-200 group-hover:scale-95"
        )}
      >
        {showMenu ? (
          <div className="relative flex flex-col gap-0.5 items-center justify-center">
            <span
              className={`w-4 h-0.5 rounded-full bg-black transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : ""}`}
            ></span>
            <span
              className={`w-[1rem] h-0.5 rounded-full bg-black transition-all duration-300 ease-in-out ${isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`}
            ></span>
            <span
              className={`w-4 h-0.5 rounded-full bg-black transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
            ></span>
          </div>
        ) : (
          <div className={"relative flex items-center justify-center"}>
            <ArrowSVG
              className={clsx(
                arrow[size],
                "-rotate-45 transition-transform duration-700 ease-in-out group-hover:-translate-y-7 group-hover:translate-x-7"
              )}
            />
            <ArrowSVG
              className={clsx(
                arrow[size],
                "-rotate-45 absolute top-0 -translate-x-7 translate-y-7 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
              )}
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default CTAButton;
