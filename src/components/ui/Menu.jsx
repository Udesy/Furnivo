import { mobile_navigation } from "@/app/constants";
import clsx from "clsx";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";

const Menu = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const lenis = window.lenis;

  useLayoutEffect(() => {
    const lenis = window.lenis;

    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      if (lenis) {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "unset";
      const timeout = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset";
        if (lenis) {
          lenis.start();
        }
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isOpen]);
  if (!shouldRender) return null;

  return (
    <div
      className={clsx(
        "bg-primary fixed inset-0 h-screen z-50 transition-opacity duration-500 lg:hidden px-8 py-2",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full h-full flex flex-col justify-end gap-y-52">
        <nav>
          <ul className="">
            {mobile_navigation.map(({ id, href, name }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-[clamp(48px,calc(44.293px+0.976vw),56px)]"
                  onClick={() => onClose()}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex justify-center text-sm">
          <h6>© 2025 Furnivo. All rights reserved.</h6>
        </div>
      </div>
    </div>
  );
};

export default Menu;
