"use client";

import { useEffect, useRef, useState } from "react";
import { Smartphone, Globe, Server, Wrench, Gauge, Layers } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "React Native", level: 80 },
  { name: "React.js", level: 76 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 75 },
  { name: "Git", level: 73 },
  { name: "Next.js", level: 70 },
  { name: "Expo", level: 68 },
  { name: "Firebase", level: 65 },
  { name: "Node.js", level: 60 },
];

const technologies = [
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Android", "iOS"],
  },
  {
    category: "Frontend",
    icon: Globe,
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "Firebase"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Figma", "AI"],
  },
];

function SkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-5">
      {skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm font-medium text-gray-200">
              {skill.name}
            </span>
            <span className="font-mono text-xs text-purple-300">
              {skill.level}%
            </span>
          </div>
          <div className="h-2.5 rounded-full bg-white/5 border border-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 shimmer transition-[width] duration-1000 ease-out"
              style={{
                width: started ? `${skill.level}%` : "0%",
                transitionDelay: `${i * 90}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          tag="Skills"
          title="Skills & Expertise"
          subtitle="What I bring to the table"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Left — Proficiency bars */}
          <Reveal direction="left">
            <div className="bg-white/3 rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-purple-500/30 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-1">
                <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Gauge size={17} className="text-purple-400" />
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Proficiency Levels
                </h3>
              </div>
              <p className="text-gray-500 text-xs mb-7 ml-12">
                Based on hands-on project experience
              </p>
              <SkillBars />
            </div>
          </Reveal>

          {/* Right — Tech stack */}
          <div className="space-y-5">
            <Reveal direction="right">
              <div className="flex items-center gap-3 mb-1">
                <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Layers size={17} className="text-purple-400" />
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Tech Stack
                </h3>
              </div>
              <p className="text-gray-500 text-xs ml-12">
                Technologies I work with daily
              </p>
            </Reveal>

            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <Reveal key={tech.category} direction="right" delay={i * 100}>
                  <div className="group bg-white/3 rounded-2xl p-5 border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/4 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <Icon
                        size={17}
                        className="text-purple-400 group-hover:text-fuchsia-400 group-hover:scale-110 transition-all"
                      />
                      <h4 className="text-white font-semibold text-sm sm:text-base">
                        {tech.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <span
                          key={item}
                          className="bg-white/5 border border-white/5 hover:border-purple-400/40 hover:bg-purple-500/15 hover:text-purple-200 text-gray-300 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
