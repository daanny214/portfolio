"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Smartphone,
  Code2,
  Braces,
} from "lucide-react";
import Reveal from "./Reveal";
import { site } from "../lib/site";

const roles = [
  "Web & Mobile Application Developer",
  "React Native Developer",
  "Next.js Developer",
];

const marqueeTech = [
  "React Native",
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Expo",
  "Node.js",
  "Firebase",
  "Git",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const pause = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(pause);
    }
    if (deleting && text === "") {
      const next = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 120);
      return () => clearTimeout(next);
    }
    const timer = setTimeout(
      () =>
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1),
        ),
      deleting ? 30 : 65,
    );
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-noise pt-24 pb-10"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots mask-[radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="absolute -top-32 -left-32 w-120 h-120 bg-violet-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-24 w-130 h-130 bg-fuchsia-600/15 rounded-full blur-3xl animate-blob-slow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center w-full">
          {/* Left — Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <Reveal>
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for freelance & full-time roles
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-5">
                Daniel
                <br />
                <span className="text-gradient">Isiyemi</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-mono text-sm sm:text-base text-purple-300 mb-6 h-6">
                {typed}
                <span className="animate-caret text-fuchsia-400">▍</span>
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9">
                Passionate developer with almost 2 years of experience building
                cross-platform mobile apps with React Native and modern web
                applications with Next.js.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-3.5 rounded-2xl font-semibold text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View My Work
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-purple-400/60 bg-white/3 hover:bg-purple-500/10 text-white px-8 py-3.5 rounded-2xl font-semibold text-base hover:-translate-y-0.5 transition-all duration-300"
                >
                  Hire Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex gap-3 justify-center lg:justify-start">
                {[
                  { icon: Github, href: site.github, label: "GitHub" },
                  { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — Portrait */}
          <Reveal
            delay={250}
            direction="none"
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Spinning dashed ring */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-purple-500/25 animate-ring-spin" />
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/40 to-fuchsia-600/40 rounded-full blur-3xl scale-90" />

              {/* Portrait */}
              <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full p-0.75 bg-linear-to-br from-violet-500 via-fuchsia-500 to-indigo-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#050608]">
                  <Image
                    src="/profile.png"
                    alt="Daniel Isiyemi"
                    fill
                    sizes="(min-width: 640px) 320px, 240px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-4 sm:-right-8 animate-float">
                <div className="flex items-center gap-2 bg-[#0d0e14]/90 backdrop-blur-md border border-white/10 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/40">
                  <Smartphone size={16} className="text-fuchsia-400" />
                  <span className="text-xs font-semibold text-gray-200">
                    React Native
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-4 sm:-left-10 animate-float-delayed">
                <div className="flex items-center gap-2 bg-[#0d0e14]/90 backdrop-blur-md border border-white/10 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-black/40">
                  <Code2 size={16} className="text-violet-400" />
                  <span className="text-xs font-semibold text-gray-200">
                    Next.js
                  </span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 sm:-right-14 animate-float-delayed hidden sm:block">
                <div className="w-11 h-11 flex items-center justify-center bg-[#0d0e14]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl shadow-black/40">
                  <Braces size={18} className="text-indigo-400" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Tech marquee */}
      <Reveal delay={600} direction="none" className="relative z-10 mt-16">
        <div className="marquee overflow-hidden border-y border-white/5 bg-white/2 py-4 mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-10">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-10 font-mono text-sm text-gray-500"
              >
                {tech}
                <span className="w-1.5 h-1.5 rotate-45 bg-purple-500/50" />
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center mt-8">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2 hover:border-purple-400 transition-colors">
            <div className="w-1 h-2 rounded-full bg-purple-400 animate-scroll-wheel" />
          </div>
        </a>
      </div>
    </section>
  );
}
