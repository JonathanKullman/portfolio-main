"use client";

import React from "react";

import { companies } from "@/data";
import { RevealY } from "./ui/RevealY";
import { RevealX } from "./ui/RevealX";

const Skills = () => {
  const marqueeItems = [...companies, ...companies];

  return (
    <section id="technologies" className="max-md:py-16 py-24 flex flex-col relative">
      <RevealX duration={1.4} startPos={-20} delay={0} once={true}>
      <p className="section-kicker">Skills</p>
      <h1 className="heading text-sm mt-2">
        Tech I Work With Most
      </h1>
      </RevealX>
      <RevealY duration={1.4} startPos={0} delay={0.3} once={true}>
      <p className="text-center pt-3 text-slate-300 max-w-2xl mx-auto leading-relaxed">
        I focus on a practical stack that lets me deliver quickly and maintain systems long-term.
      </p>
    </RevealY>

    <RevealY duration={0.8} startPos={8} delay={0.2} once={true}>
      <div className="mx-auto mt-12 w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="skills-marquee-track">
          {marqueeItems.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="flex h-24 w-24 shrink-0 items-center justify-center"
              aria-label={company.name}
              title={company.name}
            >
              <img src={company.img} alt={company.name} className="w-16 opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </RevealY>

    </section>
  );
};

export default Skills;