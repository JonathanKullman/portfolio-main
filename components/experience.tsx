"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { FlipWords } from "./ui/flip-words";
import { RevealX } from "./ui/RevealX";
import { RevealY } from "./ui/RevealY";

type Props = {};

const words = ["Timeline", "Milestones"];

const dummyContent = [
   {
    title: "Software Engineer | Nov 2024 - Present",
    description: (
      <>
        <div className="flex flex-col">
          <p
            className="font-bold font-sans mb-2 text-lg md:text-xl"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff, #2dd4bf)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Riverty AB
          </p>
          <p className="font-sans">
            Built an internal administrative platform from the ground up that is now used daily across multiple teams.
            I was responsible for architecture, database design, backend APIs, frontend in Blazor, authentication and role-based access,
            and CI/CD pipelines in Azure DevOps. I also develop and maintain business-critical .NET services in production.
          </p>
        </div>
      </>
    ),
    frameworks: ["C#", ".NET", "SQL", "Blazor", "Azure DevOps", "Pipelines CI/CD"],
  },
  {
    title: "Software Developer Internship (LIA) | 2021 - 2022",
    description: (
      <>
        <div className="flex flex-col">
          <p
            className="font-bold font-sans mb-2 text-lg md:text-xl"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff, #2dd4bf)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Vertiseit AB
          </p>
          <p className="font-sans">
            Contributed to full-stack development on customer projects with direct delivery responsibility.
            Built frontend and backend features using JavaScript, C# .NET, Angular, Python, and MongoDB while
            handling client communication and timeline commitments.
          </p>
        </div>
      </>
    ),
    frameworks: ["JavaScript", "C#", ".NET", "Angular", "Python", "MongoDB"],
  },
  {
    title: "Software Development Program (YH) | 2020 - 2022",
    description: (
      <>
        <p
          className="font-sans font-bold mb-2 text-xl"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff, #2dd4bf)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          Campus Varberg
        </p>
        <p className="font-sans">
          Vocational higher education focused on C# .NET, software architecture,
          agile delivery, databases, and modern web development.
        </p>
      </>
    ),
    frameworks: ["C#", ".NET", "SQL", "React", "Agile / Scrum"],
  },
];

const Experience = (props: Props) => {
  return (
    <section id="experience" className="pt-20 relative">
    <div className="flex flex-col relative justify-center items-center font-sans font-bold text-5xl mb-16 mt-6">
    <p className="section-kicker mb-2">Experience</p>
    <RevealX duration={1} startPos={10} delay={0.1} once={true}>
      <FlipWords words={words} />
      </RevealX>
      <RevealX duration={1.4} startPos={0} delay={0.3} once={true}>
        <span className="font-normal text-lg mt-4 font-sans">
          A quick look at where I have worked and what I have been responsible for.
        </span>
      </RevealX>
    </div>
    <TracingBeam className="px-6 relative">
      <div className="max-w-2xl mx-auto antialiased pt-4">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 max-md:ml-4">
            <RevealX duration={0.7} startPos={0} delay={0} once={true}>
              <div
                className="text-2xl md:text-3xl font-bold mb-4 font-sans"
                style={{
                  backgroundImage: "linear-gradient(to right, #ffffff, #2dd4bf)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                {item.title}
              </div>
            </RevealX>
            <RevealX duration={1} startPos={-5} delay={0.2} once={true}>
              <div className="text-md prose font-sans prose-sm dark:prose-invert">
                {item.description}
              </div>
            </RevealX>
            {item.frameworks && (
              <div className="mt-4 flex flex-wrap gap-2 pr-1">
                {item.frameworks.map((framework, index) => (
                  <RevealX
                    key={index}
                    duration={0.7}
                    startPos={-5}
                    delay={index * 0.25} // Incremental delay for each item
                    once={true}
                  >
                    <div className="bg-teal-500/90 text-slate-950 rounded-[8px] font-sans text-sm w-fit max-w-full px-2 py-0 whitespace-normal break-words">
                      {framework.split(",").map((item, subIndex) => (
                        <span key={subIndex}>{item.trim()}</span>
                      ))}
                    </div>
                  </RevealX>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </TracingBeam>
  </section>
  
  );
};

export default Experience;
