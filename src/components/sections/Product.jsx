"use client";

import React, { Suspense, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Model({ model }) {
  const { scene } = useGLTF(model.modelFile);

  return <primitive object={scene} scale={model.scale} />;
}

export default function Product({ data }) {
  const controlRef = useRef(null);
  const [grabbing, setGrabbing] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [path, setPath] = useState(data?.[0].modelFile || null);
  const [model, setModel] = useState(data?.[0] || null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  const handleClick = (selectedModel) => {
    setModel(selectedModel);
    setPath(selectedModel.modelFile);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textSplit = new SplitText(textRef.current, { type: "lines" });
      gsap.set(textSplit.lines, { yPercent: 100, opacity: 0 });
      gsap.to(textSplit.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power1.in",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return data?.length ? (
    <div
      className="relative min-h-svh py-[clamp(3rem,calc(2.273rem+3.636vi),5rem)]"
      ref={sectionRef}
      id="Product"
    >
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 md:gap-4 px-[clamp(1.5rem,calc(0.773rem+3.636vi),3.5rem)]">
        <div className="lg:col-span-9 md:col-span-6 col-span-4 flex flex-col gap-[clamp(32px,calc(20.364px+3.636vi),64px)]">
          <h4 className="text-base text-accent">[Explore our Collections]</h4>
          <h1 className="heading-1 w-full" ref={textRef}>
            At Furnivo, we craft premium furniture from the finest woods,
            bringing timeless beauty, strength, and comfort to any space.
          </h1>
        </div>
        <div className="col-span-12 flex justify-end mt-14">
          <CTAButton
            size="md"
            children={"Explore More Collection"}
            className="inline-flex"
            variant="primary"
          />
        </div>
      </div>
      <div className="w-full h-fit flex lg:flex-row flex-col gap-[clamp(2rem,calc(-9.636rem+18.182vw),4rem)] mt-[clamp(48px,calc(36.364px+3.636vi),80px)] bg-primary px-[clamp(1.5rem,calc(0.773rem+3.636vi),3.5rem)] py-[clamp(2.5rem,calc(1.955rem+2.727vw),4rem)]">
        <div
          className="lg:h-[42rem] md:h-[36rem] h-[24rem] w-full bg-secondary overflow-hidden rounded-[10px]"
          style={{ cursor: grabbing ? "grabbing" : "grab" }}
          onMouseEnter={() => setEnabled(true)}
          onMouseLeave={() => setEnabled(false)}
        >
          <Canvas
            camera={{ position: [0, 40, 80], fov: 45 }}
            onPointerDown={() => setGrabbing(true)}
            onPointerUp={() => setGrabbing(false)}
            onPointerLeave={() => setGrabbing(false)}
          >
            <ambientLight intensity={5} />
            <directionalLight
              position={[
                model.lightDirection.dirX,
                model.lightDirection.dirY,
                model.lightDirection.dirZ,
              ]}
              intensity={6}
              color={"#FFFFFF"}
            />

            <Suspense
              fallback={
                <Html fullscreen>
                  <div
                    style={{ color: "white" }}
                    className="w-full h-full flex items-center justify-center inset-0 bg-white/95 backdrop-blur-xl"
                  >
                    <div className="w-14 h-14 border-4 border-gray-300 border-t-accent rounded-full animate-spin"></div>
                  </div>
                </Html>
              }
            >
              {path && <Model model={model} />}
            </Suspense>

            <OrbitControls
              ref={controlRef}
              enabled={enabled}
              minDistance={30}
              maxDistance={100}
            />
          </Canvas>
        </div>
        <div className="w-full flex flex-col items-center justify-between">
          <div className="w-full h-full flex flex-col gap-12">
            <div className="flex flex-col gap-[40px]">
              <h1 className="text-[clamp(1.50rem,calc(1.227rem+1.364vw),2.25rem)] max-w-[25ch]">
                {model.productTitle}
              </h1>
              <div className="flex flex-row justify-between">
                <div className=" md:space-y-2 space-y-1">
                  <h4 className="prod_category text-neutral-500">Price</h4>
                  <h3 className="prod_info font-semibold">
                    {model.productPrice}
                  </h3>
                </div>
                <div className="md:space-y-2 space-y-1">
                  <h4 className="prod_category text-neutral-500">Fabric</h4>
                  <h3 className="prod_info font-semibold">
                    {model.productFabric}
                  </h3>
                </div>
                <div className="md:space-y-2 space-y-1">
                  <h4 className="prod_category text-neutral-500">Category</h4>
                  <h3 className="prod_info font-semibold">
                    {model.productCategory}
                  </h3>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <p className="text-[clamp(0.88rem,calc(0.693rem+0.909vw),1.38rem)]">
                {model.description}
              </p>
              <CTAButton
                size={"md"}
                children={"Enquiry Now"}
                className={"inline-flex"}
                variant={"secondary"}
              />
            </div>
          </div>
          <div className="flex flex-row lg:gap-8 md:gap-6 gap-4 w-full min-h-fit overflow-x-auto scrollbar-hidden max-lg:mt-14 max-md:mt-10">
            {data.map((selectedmodel, index) => (
              <div
                onClick={() => handleClick(selectedmodel)}
                key={index}
                className={`relative border-2 min-w-[clamp(56px,calc(47.273px+2.727vw),80px)] min-h-[clamp(56px,calc(47.273px+2.727vw),80px)] rounded-lg cursor-pointer overflow-hidden transition-all ease-in-out duration-300 ${model?.slug === selectedmodel.slug ? "border-accent" : "border-gray-400"}`}
              >
                <Image src={selectedmodel.src} fill alt="Product Image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
