"use client";
import React, { useEffect, useRef, useState } from "react";
import { Spotlight } from "./ui/spotlight";
import MagicButton from "./ui/magic-button";
import { FaDownload } from "react-icons/fa";
import { RevealY } from "./ui/RevealY";

const Hero = () => {
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const cvLinks = {
    english: "https://drive.google.com/file/d/1Yq-1NM67rQ2jSod4IXrttICL3oJsPizk/view?usp=sharing",
    swedish: "https://drive.google.com/file/d/1Zz36FNnJGJb3qbyErJHz59S3IXnBiF1G/view?usp=sharing",
  };

  const cvOptions = [
    {
      label: "English CV",
      href: cvLinks.english,
      detail: "Primary version",
    },
    {
      label: "Swedish CV",
      href: cvLinks.swedish,
      detail: "Svensk version",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsCvMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    
    <div className="pb-20 md:pb-28 md:pt-14 relative">
      <div>
       
        <Spotlight
          className="max-sm:top-10 left-full max-lg:h-[80vh] -top-28  w-[50-vw]"
          fill="#14b8a6"
        />
      </div>

      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center 
      justify-center [background:radial-gradient(circle_at_center,rgba(20,184,166,0.09),transparent_55%)]"
        />
      </div>
      <div className="flex flex-col items-center relative justify-center z-20 mt-16 mb-14 md:mb-14 text-center">
        <div className="py-3">
        <RevealY duration={0.5} startPos={20} delay={0} once={true}>
          <p className="section-kicker mb-3">Software Engineer • Varberg, Sweden</p>
          <div className="py-2 text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-bold">
            <p className="font-mono text-xl md:text-2xl font-normal text-teal-300 mb-3">
              Jonathan Kullman
            </p>
            <span className="tracking-tight">I build software that</span>
            <br />
            <span className="animated-text text-cyan-300 tracking-tight text-4xl sm:text-5xl md:text-6xl">
              delivers clear value
            </span>
          </div>
          </RevealY>
        </div>

        <RevealY duration={0.5} startPos={0} delay={0.35} once={true}>
          <p className="max-w-3xl mt-6 text-sm md:text-lg text-slate-300 font-normal px-4 leading-relaxed">
            I enjoy turning ideas into stable, user-friendly products and working closely with product and engineering teams.
            My focus is fullstack delivery with clean collaboration and long-term maintainability, and I have a soft spot for frontend work and polished user experiences.
          </p>
        </RevealY>
      </div>
      <div className="flex justify-center relative" ref={menuRef}>
      <RevealY duration={0.5} startPos={20} delay={0.6} once={true}>
      <button
        type="button"
        onClick={() => setIsCvMenuOpen((previous) => !previous)}
        aria-expanded={isCvMenuOpen}
        aria-haspopup="menu"
      >
          <MagicButton
          title='Download CV'
          icon={<FaDownload />}
          position='right'
          />
      </button>

      {isCvMenuOpen && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/12 bg-slate-950/70 p-2 backdrop-blur-md shadow-[0_18px_45px_rgba(8,145,178,0.22)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(56,189,248,0.16),transparent_42%),radial-gradient(circle_at_92%_90%,rgba(45,212,191,0.14),transparent_44%)]" />
          <div className="relative space-y-2">
            {cvOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="group block rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 transition-colors duration-200 hover:border-cyan-300/35 hover:bg-slate-900/80"
                onClick={() => setIsCvMenuOpen(false)}
              >
                <p className="text-sm font-medium text-slate-100 group-hover:text-cyan-100 transition-colors duration-200">
                  {option.label}
                </p>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                  {option.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
        </RevealY>
      </div>
    </div>

  );
};

export default Hero;
