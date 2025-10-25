import { mobile_navigation } from "@/app/constants";
import clsx from "clsx";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";

const Menu = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);

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
        "bg-primary fixed inset-0 h-svh z-50 transition-opacity duration-500 lg:hidden px-8 py-2",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full h-full flex flex-col justify-between gap-y-52">
        <nav className=" h-full flex items-end">
          <ul className="flex flex-col">
            {mobile_navigation.map(({ id, href, name }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-[clamp(2.00rem,calc(1.305rem+2.927vw),3.50rem)]"
                  onClick={() => onClose()}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex justify-center text-[clamp(0.75rem,calc(0.692rem+0.244vw),0.88rem)]">
          <h6>© 2025 Furnivo. All rights reserved.</h6>
        </div>
      </div>
    </div>
  );
};

export default Menu;
