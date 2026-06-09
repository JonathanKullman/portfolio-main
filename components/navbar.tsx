import React from 'react'
import { socialLinks } from "@/data/index";
import { AnimatedTooltip } from './ui/animated-tooltip';

const Navbar = () => {
  return (
    <section id='home'>
    <div className="md:max-w-6xl items-center text-sm flex z-[200] justify-end relative md:mt-16 mt-10 max-md:mr-2">
    <div className="z-10 flex gap-8">
      <AnimatedTooltip startPosi={-20} delayStart={0.8} items={socialLinks} />
    </div>
  </div>
  </section>
  )
}

export default Navbar