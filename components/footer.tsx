'use client';
import { FaLocationArrow } from "react-icons/fa6";

import { socialLinks } from "@/data";
import MagicButton from "./ui/magic-button";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { RevealY } from "./ui/RevealY";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-30 "
        />
      </div>

      <div className="flex flex-col items-center">
      <RevealY duration={1.2} startPos={30} delay={0} once={true}>
        <h1 className="heading lg:max-w-[45vw]">
        Interested in <span className="animated-text">work opportunities</span>? I&apos;d <span className="animated-text">love</span> to hear from you!
        </h1>
        </RevealY>
        <HeroHighlight  className="text-center my-5">
        <RevealY duration={1.2} startPos={-10} delay={0.8} once={true}>
        Reach out to me today and let&apos;s connect on how I can add&nbsp;
        <Highlight className="font-semibold">
        value for you.
        </Highlight>
    </RevealY>

    </HeroHighlight>

    <RevealY duration={1.2} startPos={0} delay={0.8} once={true}>
        <a className="max-md:pt-5" href="mailto:jontekull@gmail.com">
          <MagicButton
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow />}
            position="right"
            
          />
        </a>
        </RevealY>
      </div>
      <div className="flex mt-20 md:mt-40 md:flex-row flex-col justify-between items-center text-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2025 Jonathan Kullman. Portfolio version 1.0.
        </p>

        <div className=" max-md:pt-6 md:max-w-6xl items-center font-mono text-sm flex z-[200] justify-end relative max-md:mr-6">
    <div className="z-10 flex gap-12 from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
      <AnimatedTooltip startPosi={0} delayStart={0} items={socialLinks} />
    </div>
  </div>
      </div>
    </footer>
  );
};

export default Footer;