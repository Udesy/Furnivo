import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section className="h-[500px] relative rounded-[20px] overflow-hidden mt-[100px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={"/images/newsletter_images/image-1.jpg"}
          fill
          alt="Newsletter Image"
          className="object-cover"
        />
      </div>
      <div className=" relative h-full w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-14">
          <h2 className="text-[clamp(1.50rem,calc(0.921rem+2.105vw),2.50rem)] max-w-[60%] text-center leading-[125%]">
            Stay Updated with Our Latest Designs in your Inbox
          </h2>
          <div className="flex flex-row w-fit gap-5">
            <input
              placeholder="Enter your Email"
              className="w-[clamp(13.75rem,calc(7.088rem+28.049vw),28.125rem)] lg:h-11 h-10 md:px-4 px-3 lg:text-[1rem] text-[0.8rem] bg-white rounded-full focus:outline-none"
            ></input>
            <button className="rounded-full h-11 w-fit bg-primary px-2 py-2 gap-2 flex flex-row items-center group transition-all duration-300 cursor-pointer">
              <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-500 ease-in-out lg:text-[1rem] text-[0.8rem]">
                Submit
              </span>
              <span className="h-6 w-6 p-1 bg-accent overflow-hidden rounded-full scale-0 transition-all duration-500 ease-in-out opacity-0 group-hover:scale-100 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  width="100%"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
