"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import MagicButton from "./ui/magic-button";
import { GlobeDemo } from "./ui/grid-globe";
import { RevealY } from "./ui/RevealY";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "jontekull@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/15 group/bento hover:shadow-[0_12px_40px_rgba(2,6,23,0.45)] transition duration-300 dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(6,10,26)",
        backgroundColor:
          "linear-gradient(120deg, rgba(6,10,26,1) 0%, rgba(15,23,42,1) 45%, rgba(8,18,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 2 && <GlobeDemo />}
        {id === 6 && (
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(6, 20, 35)"
            gradientBackgroundEnd="rgb(5, 12, 28)"
            firstColor="45, 212, 191"
            secondColor="14, 165, 233"
            thirdColor="34, 197, 94"
            fourthColor="56, 189, 248"
            fifthColor="16, 185, 129"
            pointerColor="45, 212, 191"
            blendingValue="soft-light"
          >
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative z-10 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 1 && (
            <span className="w-fit rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3 py-1 text-[11px] tracking-wide uppercase text-emerald-200 mb-2">
              Current Role
            </span>
          )}
          <RevealY duration={0.8} startPos={20} delay={0.2} once={true}>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-xl font-semibold z-10 text-slate-100`}
          >
            {title}
          </div>
          </RevealY>
          <RevealY duration={1} startPos={10} delay={0.4} once={true}>
          <div className="font-sans font-normal mt-2 md:mt-5 md:-mb-5 md:max-w-90 md:text-sm lg:text-base text-sm text-slate-300 z-10 leading-relaxed">
            {description}
          </div>
          </RevealY>
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
              </div>
              <RevealY duration={1} startPos={0} delay={0.6} once={true}>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-slate-900"
              />
              </RevealY>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};
