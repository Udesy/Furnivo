import clsx from "clsx";
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
        "bg-black fixed inset-0 h-screen z-50 transition-opacity duration-500",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    ></div>
  );
};

export default Menu;
