"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Calendar,
  MapPin,
  Download,
  BadgeCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Apps Built", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 3, suffix: "" },
  { label: "Technologies", value: 10, suffix: "+" },
];

const details = [
  { icon: MapPin, text: "Lagos, Nigeria" },
  { icon: Briefcase, text: "Open to Freelance & Full-time Roles" },
  { icon: Calendar, text: "1+ Year of Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          tag="About"
          title="About Me"
          subtitle="From Lagos — building apps the world uses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left — Portrait */}
          <Reveal direction="left" className="flex justify-center">
            <div className="relative">
              {/* Decorative corner frames */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-purple-500/60 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-fuchsia-500/60 rounded-br-3xl" />

              <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 group">
                <Image
                  src="/profile.png"
                  alt="Daniel Isiyemi"
                  fill
                  sizes="(min-width: 640px) 320px, 240px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-2 sm:-right-6 animate-float">
                <div className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2.5 rounded-2xl font-semibold shadow-xl shadow-purple-500/30 text-sm">
                  <BadgeCheck size={17} />
                  Available for hire!
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Info */}
          <Reveal direction="right">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5 tracking-tight">
              Web & Mobile Developer based in{" "}
              <span className="text-gradient">Lagos, Nigeria</span>
            </h3>

            <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base">
              I&apos;m Daniel, a passionate Web & Mobile Developer with over a
              year of hands-on experience building cross-platform mobile apps
              with React Native and modern web applications with Next.js. I
              enjoy turning ideas into clean, performant and user-friendly
              products that solve real problems.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
              When I&apos;m not coding, you&apos;ll find me listening to music
              or diving deep into new technologies — I&apos;m always curious
              about what&apos;s next in the world of software development.
            </p>

            {/* Details */}
            <div className="space-y-3 mb-9">
              {details.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3.5 text-gray-300 text-sm sm:text-base group"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-400/40 transition-all shrink-0">
                    <Icon size={16} className="text-purple-400" />
                  </span>
                  {text}
                </div>
              ))}
            </div>

            <a
              href="/cv.pdf"
              className="group inline-flex items-center gap-2.5 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm sm:text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              Download CV
            </a>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-24">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="group relative bg-white/3 rounded-2xl p-5 sm:p-7 text-center border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/6 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-display text-3xl sm:text-5xl font-bold text-gradient mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
