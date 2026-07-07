"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Smartphone,
  Globe,
  BarChart3,
  TrendingUp,
  Heart,
  Sparkles,
  FolderGit2,
  Clock,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "../lib/site";

const projects = [
  {
    id: 1,
    title: "DannyStats — World Cup 2026 Predictor",
    description:
      "Data-driven probability forecasts for the 2026 FIFA World Cup. A Python engine replays Elo ratings over 150 years of internationals, models scorelines with Poisson + Dixon-Coles, and runs 50,000 Monte Carlo tournament simulations — backtested, calibrated, and refreshed daily with the full track record published.",
    icon: BarChart3,
    image: "/projects/dannystats.png",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    tags: ["Python", "Next.js", "Monte Carlo", "numpy / pandas"],
    github: "https://github.com/daanny214/worldcup-predictor",
    live: "https://dannystats.vercel.app",
    type: "Web App",
  },
  {
    id: 2,
    title: "XChange - Currency & Crypto Converter",
    description:
      "Real-time currency and cryptocurrency converter supporting 160+ currencies and 50+ cryptos. Features live exchange rates, searchable dropdowns, conversion history, and dual-mode interface for both fiat and crypto.",
    icon: TrendingUp,
    image: "/projects/xchange.png",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    tags: ["Next.js", "TypeScript", "CoinGecko API", "Tailwind CSS"],
    github: "https://github.com/daanny214/currency-converter",
    live: "https://currency-converter-eight-ruddy.vercel.app",
    type: "Web App",
  },
  {
    id: 3,
    title: "Vibe - Dating App",
    description:
      "A modern dating app where people connect through shared interests and vibes. Features profile creation, smart matching algorithm, real-time messaging, and location-based discovery. Built for authentic connections.",
    icon: Heart,
    image: "",
    gradient: "from-pink-400 via-rose-500 to-red-600",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    github: "https://github.com/daanny214/vibe",
    live: "",
    type: "Mobile App",
  },
  {
    id: 4,
    title: "StudyBuddy - AI Study Assistant",
    description:
      "An AI-powered study companion that generates flashcards from notes, creates personalized quizzes, tracks progress, and provides smart study schedules. Uses GPT-4 for intelligent content generation.",
    icon: Sparkles,
    image: "",
    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
    tags: ["Next.js", "Firebase", "OpenAI API", "TypeScript"],
    github: "https://github.com/daanny214/studybuddy",
    live: "",
    type: "Web App",
  },
];

function SpotlightCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative h-full bg-white/3 rounded-3xl border border-white/5 hover:border-purple-500/40 transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(168, 85, 247, 0.1), transparent 45%)",
        }}
      />
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          tag="Featured Work"
          title="My Projects"
          subtitle="Real-world applications built with modern technologies and best practices"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.id} delay={(index % 2) * 120}>
                <SpotlightCard>
                  {/* Banner */}
                  <div
                    className={`relative h-48 sm:h-56 bg-linear-to-br ${project.gradient} overflow-hidden`}
                  >
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-dots opacity-30" />
                        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-7 border border-white/20 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <Icon
                            className="text-white w-14 h-14 sm:w-16 sm:h-16 drop-shadow-2xl"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    )}

                    {/* Type badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                        {project.type === "Web App" ? (
                          <Globe size={12} className="text-white" />
                        ) : (
                          <Smartphone size={12} className="text-white" />
                        )}
                        <span className="text-white text-xs font-semibold">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/5 border border-white/5 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:border-purple-400/40 hover:text-purple-300 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-4 py-3 rounded-xl font-medium text-sm transition-all group/btn"
                      >
                        <Github
                          size={16}
                          className="group-hover/btn:rotate-12 transition-transform"
                        />
                        Code
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-purple-500/25 transition-all group/btn"
                        >
                          <ExternalLink
                            size={16}
                            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          />
                          Live Demo
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 bg-white/2 border border-white/5 text-gray-600 px-4 py-3 rounded-xl font-medium text-sm cursor-not-allowed">
                          <Clock size={16} />
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <Reveal className="text-center mt-14 sm:mt-20">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/3 hover:bg-purple-500/10 border border-white/10 hover:border-purple-400/50 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-purple-500/15 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <FolderGit2
              size={22}
              className="text-purple-400 group-hover:rotate-12 transition-transform"
            />
            Explore More on GitHub
            <ExternalLink
              size={18}
              className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
