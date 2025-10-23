"use client";

import { faqs } from "@/app/constants";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AccordianItem = ({ question, answer, isOpen, onToggle }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="w-full px-[clamp(1rem,calc(0.421rem+2.105vw),2rem)] py-[clamp(1rem,calc(0.711rem+1.053vw),1.5rem)] cursor-pointer bg-primary rounded-[10px]"
      onClick={onToggle}
      id="FAQs"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-[clamp(0.88rem,calc(0.830rem+0.227vw),1.00rem)]">
          {question}
        </h1>
        <div className="relative md:h-7 md:w-7 w-5 h-5 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black transition-all duration-300 ease-in-out"
          >
            <line
              x1="6"
              y1="12"
              x2="18"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="6"
              x2="12"
              y2="18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={`transition-all duration-300 origin-center ${
                isOpen ? "scale-y-0 opacity-0" : "scale-y-100"
              }`}
            />
          </svg>
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className={`h-fit w-full  overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pt-4" : "opacity-0 pt-0"}`}
      >
        <p className="max-w-[45ch] text-[14px]">{answer}</p>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="h-fit section-padding">
      <div className="w-full h-full grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-5">
        <div className="cols-start-1 lg:sticky lg:top-8 col-span-4 self-start flex flex-col gap-14">
          <div className="flex flex-col gap-[clamp(2rem,calc(1.273rem+3.636vw),4rem)]">
            <div className="w-full">
              <p className="text-base text-accent">[FAQs]</p>
            </div>
            <div className="w-full">
              <h1 className="heading-1 text-black">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          <div
            className="relative hidden lg:block w-full rounded-[20px] overflow-hidden"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src={"/images/faq_image/image-1.jpg"}
              fill
              alt="FAQ Image"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-start-7 lg:col-span-6 md:col-span-8 col-span-4 space-y-[clamp(0.75rem,calc(0.316rem+1.579vw),1.5rem)] lg:mt-60 mt-[clamp(3.5rem,calc(2.632rem+3.158vw),5rem))]">
          {faqs.map(({ id, question, answer }) => (
            <AccordianItem
              key={id}
              question={question}
              answer={answer}
              isOpen={openIndex === id}
              onToggle={() => handleToggle(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
