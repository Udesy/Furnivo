import React from "react";
import Logo from "../ui/Logo";
import {
  company,
  customer_support,
  help_center,
  navigation,
  social_icon,
} from "@/app/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-svh footer-padding">
      <div className="relative w-full min-h-svh flex flex-col justify-between">
        <div className="flex md:flex-row flex-col md:justify-between gap-24">
          <div className="h-fit w-fit flex flex-col gap-5">
            <h5 className="footer_nav_head">Navigation</h5>
            <ul className="footer_nav_list">
              {navigation.map(({ id, href, name }) => (
                <li key={id} className="leading-[125%]">
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-36 gap-18">
            <div className="h-fit flex flex-col md:gap-5 gap-4">
              <h5 className="footer_nav_head">Customer Support</h5>
              <ul className="md:space-y-2 space-y-1 footer_nav-item">
                {customer_support.map(({ id, text }) => (
                  <li key={id}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-18">
              <div className="flex flex-col md:gap-5 gap-4">
                <h5 className="footer_nav_head">Company</h5>
                <ul className="md:space-y-2 space-y-1 footer_nav-item">
                  {company.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:gap-5 gap-4">
                <h5 className="footer_nav_head">Help Center</h5>
                <ul className="md:space-y-2 space-y-1 footer_nav-item">
                  {help_center.map(({ id, text }) => (
                    <li key={id} className="w-[30ch]">
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bottom-0 flex flex-col gap-2 mt-[clamp(7.5rem,calc(5.415rem+8.78vw),12rem)]">
          <div className="bg-primary rounded-[10px] flex flex-col justify-between overflow-hidden gap-40">
            <div className="flex flex-row justify-between p-[clamp(0.5rem,calc(0.268rem+0.976vw),1rem)]">
              <h2 className="text-[clamp(0.69rem,calc(-0.012rem+2.683vw),2.00rem)] leading-[125%] max-w-[25ch]">
                Crafting premium furniture with timeless elegance.
              </h2>
              <div className="flex flex-row gap-[clamp(0.3rem,calc(0.037rem+1.951vw),1.5rem)] w-fit h-fit">
                {social_icon.map(({ id, name, Icon }) => (
                  <a
                    key={id}
                    className="size-[clamp(1.125rem,calc(0.951rem+0.732vw),1.5rem)]"
                    aria-label={name}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
            <div className="translate-x-0.5 translate-y-2">
              <Logo
                useGradient="true"
                gradientDirection="90deg"
                gradientStart="#979797"
                gradientEnd="#4D4D4D"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between leading-[125%] text-[clamp(0.69rem,calc(0.543rem+0.610vw),1.00rem)]">
            <h4>© 2025 Furnivo. All rights reserved.</h4>
            <h4>
              <Link
                href={"https://www.uddeshyaprajapati.xyz"}
                target="_blank"
                className="hover black"
              >
                Website By Uddeshya
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
