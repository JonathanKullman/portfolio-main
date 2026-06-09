'use client';
import { FaLock } from "react-icons/fa";
import { projects } from "@/data";
import { RevealX } from "./ui/RevealX";
import { RevealY } from "./ui/RevealY";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <RevealY duration={1} startPos={20} delay={0} once={true}>
        <p className="section-kicker mb-3">Projects</p>
        <h1 className="heading">
          Selected Projects
        </h1>
      </RevealY>
      <RevealY duration={1} startPos={0} delay={0.2} once={true}>
      <span className="font-normal text-base md:text-lg mt-4 font-sans flex text-center justify-center text-slate-300 max-w-2xl mx-auto leading-relaxed">
      A mix of platform and product-focused work.
        </span>
        </RevealY>
      <RevealY duration={1} startPos={0} delay={0.3} once={true}>
      <span className="font-normal text-sm mt-3 font-sans flex text-center justify-center text-slate-400 max-w-2xl mx-auto leading-relaxed">
      Some projects are private or confidential, but I can walk through the approach and technical decisions in interviews.
        </span>
        </RevealY>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10 w-full">
        {projects.map((item, index) => (
          
          <div
            className="flex items-center justify-center w-full"
            key={item.id}
          >
            <RevealX
              duration={1}
              startPos={-5}
              delay={0.2 + index * 0.2}
              once={true}
            >
              
              <article className="group relative overflow-hidden w-full max-w-4xl rounded-2xl border border-white/10 bg-slate-950/45 p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_16px_40px_rgba(8,145,178,0.18)]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.14),transparent_40%),radial-gradient(circle_at_85%_90%,rgba(45,212,191,0.12),transparent_38%)]" />
                <div className="grid md:grid-cols-[1.15fr_1fr] gap-5 items-stretch">
                  <div className="relative overflow-hidden rounded-xl bg-slate-900/60 border border-white/10">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                    <span className="absolute text-red-300 top-3 right-3 rounded-full border border-cyan-300/30 bg-slate-900/80 px-3 py-1 text-xs font-medium text-cyan-100">
                      Confidential
                    </span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h1 className="font-bold text-xl md:text-2xl text-slate-100 mb-2">
                        {item.title}
                      </h1>

                      <p className="text-xs md:text-sm text-slate-400 mb-2">
                        Internal project. Source code is not public, but architecture and technical decisions can be shared in interviews.
                      </p>

                      <p className="font-normal text-sm leading-relaxed text-slate-300 mb-5">
                        {item.des}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {item.iconLists.map((icon, index) => (
                          <span
                            key={index}
                            className="p-2 h-10 w-10 rounded-md border border-white/10 bg-slate-900/40 flex items-center justify-center"
                          >
                            <img src={icon} alt={`tech-${index}`} className="w-6 h-6" />
                          </span>
                        ))}
                      </div>

                      {(() => {
                        const hasPreviewLink = Boolean(item.link?.trim());

                        return (
                          <a
                            href={hasPreviewLink ? item.link : undefined}
                            target={hasPreviewLink ? "_blank" : undefined}
                            rel={hasPreviewLink ? "noopener noreferrer" : undefined}
                            aria-disabled={!hasPreviewLink}
                            onClick={(event) => {
                              if (!hasPreviewLink) {
                                event.preventDefault();
                              }
                            }}
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm whitespace-nowrap transition-colors duration-200 ${
                              hasPreviewLink
                                ? "border-cyan-300/30 bg-slate-900/70 text-cyan-100 hover:border-cyan-200/60 hover:bg-slate-900"
                                : "border-white/20 bg-slate-900/60 text-slate-300 cursor-not-allowed"
                            }`}
                          >
                            <FaLock className={hasPreviewLink ? "text-cyan-300" : "text-red-300"} />
                            <span className={hasPreviewLink ? "" : "text-red-300"}>{hasPreviewLink ? "Open preview" : "Preview unavailable"}</span>
                          </a>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </article>
            </RevealX>
          </div>
        ))}
      </div>
      <RevealY duration={0.9} startPos={8} delay={0.35} once={true}>
        <p className="text-center text-xs md:text-sm text-slate-500 mt-6">
          I have other personal projects in progress as well, but they are not ready to be shown here yet.
        </p>
      </RevealY>
    </section>
  );
};

export default Projects;
