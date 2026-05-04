"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import MagicButton from "./ui/magic-button";
import { FaDownload,  } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { RevealY } from "./ui/RevealY";

const Hero = () => {
  return (
    
    <div className="pb-20 md:pb-28 md:pt-16 relative">
      <div>
       
        <Spotlight
          className="max-sm:top-10 left-full max-lg:h-[80vh] -top-28  w-[50-vw]"
          fill="#5F48D9"
        />
      </div>

      <div
        className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.01] bg-grid-black/[0.03] flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center 
      justify-center dark:bg-black-100 bg-white 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex flex-col items-center relative justify-center z-20 mt-20 mb-14 md:mb-14 font-bold">
        <div className="py-3">
        <RevealY duration={0.5} startPos={20} delay={0} once={true}>
          <div className="py-2 text-6xl sm:text-6xl md:text-7xl">
            <span className="font-mono">Hi</span>
            <span className="animated-text text-5xl md:text-7xl tracking-[0.01rem]">
              ,{" "}
            </span>
            <span className="text-6xl md:text-7xl tracking-tighter font-mono">
              I&apos;m <br />
            </span>
            <span className="animated-text text-7xl md:text-8xl font-mono">
              Jonathan <br />
            </span>
            <span className="animated-text text-7xl md:text-8xl font-mono">
              Kullman
            </span>
          </div>
          </RevealY>
        </div>

        <RevealY duration={0.5} startPos={-20} delay={0.2} once={true}>
        <div className="flex font-mono text-2xl sm:text-3xl md:text-4xl xl:text-5xl ">
          <TypeAnimation
            className="animated-text font-mono"
            sequence={[
              200,
              " Fullstack",
              2500,
              " Frontend",
              2500,
              " Backend",
              2500,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
          Developer<span className="animated-text font-mono">.</span>
        </div>
        </RevealY>
      </div>
      <div className="flex justify-center relative">
      <RevealY duration={0.5} startPos={20} delay={0.6} once={true}>
      <a href="https://drive.google.com/file/d/1udwdYYo76iqqgZOVCsIsFPdUBxDgsjG0/view?usp=sharing"
        target="_blank">      
          <MagicButton
          title='Download CV'
          icon={<FaDownload />}
          position='right'
          />
        </a>
        </RevealY>
      </div>
    </div>

  );
};

export default Hero;
