"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Logo from "../ui/Logo";
import CTAButton from "../ui/CTAButton";
import { navigation } from "@/app/constants";
import Link from "next/link";
import Menu from "../ui/Menu";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isNavigation, setIsNavigation] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const getScrollThreshold = () => {
      const heroSection = document.querySelector(".hero-section");
      const heroHeight = heroSection?.offsetHeight || window.innerHeight;
      return heroHeight * 0.9;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Change color after scrolling past hero section
      if (currentScrollY > getScrollThreshold()) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // Handle resize to recalculate thresholds
    const handleResize = () => {
      handleScroll();
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsNavigation((prev) => !prev);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed w-full z-100 top-0 left-0 flex justify-center items-center py-4 px-[clamp(1.5rem,calc(0.773rem+3.636vi),3.5rem)] transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="backdrop-blur-xs rounded-xl w-full px-[clamp(1rem,calc(0.636rem+1.818vw),2rem)] py-3.5 flex flex-row items-center justify-between transition-colors duration-300 bg-white/20">
          <div className="w-fit h-5 transition-all duration-300">
            <Logo fillColor={isDark || isNavigation ? "#000000" : "#FFFDFB"} />
          </div>
          <nav className="w-fit lg:block hidden">
            <ul
              className={clsx(
                "flex flex-row justify-between gap-6 text-[1rem] transition-colors duration-300",
                isDark ? "text-black" : "text-white"
              )}
            >
              {navigation.map(({ id, href, name }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className={clsx(
                      "hover inline-block",
                      isDark ? "black" : "white"
                    )}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <CTAButton
            children={"Enquiry Now"}
            variant="secondary"
            className="hidden lg:inline-flex"
          />
          <CTAButton
            size={"md"}
            children={"Menu"}
            variant="secondary"
            className="lg:hidden inline-flex"
            showMenu={true}
            onClick={handleClick}
            isNavigation={isNavigation}
          />
        </div>
      </header>
      <Menu isOpen={isNavigation} onClose={() => setIsNavigation(false)} />
    </>
  );
};

export default Navbar;
