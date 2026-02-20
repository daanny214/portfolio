"use client";

import {
  Github,
  ExternalLink,
  Smartphone,
  Globe,
  Building2,
  TrendingUp,
  Heart,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ATM Simulator",
    description:
      "A web-based ATM simulator with real Nigerian bank verification using Paystack API. Features PIN authentication, balance checking, deposits, withdrawals, transfers with account verification, and transaction history.",
    icon: Building2,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    shadowColor: "shadow-emerald-500/30",
    tags: ["Next.js", "TypeScript", "Paystack API", "Tailwind CSS"],
    github: "https://github.com/daanny214/atm-simulator",
    live: "https://atm-simulator-ten.vercel.app",
    type: "Web App",
    platforms: ["Web"],
  },
  {
    id: 2,
    title: "XChange - Currency & Crypto Converter",
    description:
      "Real-time currency and cryptocurrency converter supporting 160+ currencies and 50+ cryptos. Features live exchange rates, searchable dropdowns, conversion history, and dual-mode interface for both fiat and crypto.",
    icon: TrendingUp,
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    shadowColor: "shadow-blue-500/30",
    tags: ["Next.js", "TypeScript", "CoinGecko API", "Tailwind CSS"],
    github: "https://github.com/daanny214/currency-converter",
    live: "https://currency-converter-eight-ruddy.vercel.app",
    type: "Web App",
    platforms: ["Web"],
  },
  {
    id: 3,
    title: "Vibe - Dating App",
    description:
      "A modern dating app where people connect through shared interests and vibes. Features profile creation, smart matching algorithm, real-time messaging, and location-based discovery. Built for authentic connections.",
    icon: Heart,
    gradient: "from-pink-400 via-rose-500 to-red-600",
    shadowColor: "shadow-pink-500/30",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    github: "https://github.com/daanny214/vibe",
    live: "",
    type: "Mobile App",
    platforms: ["iOS", "Android"],
  },
  {
    id: 4,
    title: "StudyBuddy - AI Study Assistant",
    description:
      "An AI-powered study companion that generates flashcards from notes, creates personalized quizzes, tracks progress, and provides smart study schedules. Uses GPT-4 for intelligent content generation.",
    icon: Sparkles,
    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
    shadowColor: "shadow-violet-500/30",
    tags: ["Next.js", "Firebase", "OpenAI API", "TypeScript"],
    github: "https://github.com/daanny214/studybuddy",
    live: "",
    type: "Web App",
    platforms: ["Web"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-900/20 via-slate-800 to-slate-800" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">
                Featured Work
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best
            practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-xl hover:shadow-2xl">
                  {/* Gradient Banner with Icon */}
                  <div
                    className={`relative h-48 sm:h-52 bg-linear-to-br ${project.gradient} overflow-hidden`}
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                    </div>

                    {/* Icon Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Glow Effect */}
                        <div
                          className={`absolute inset-0 blur-2xl ${project.shadowColor} scale-150 group-hover:scale-175 transition-transform duration-500`}
                        />

                        {/* Icon Background Circle */}
                        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <Icon
                            className="text-white w-16 h-16 sm:w-20 sm:h-20 drop-shadow-2xl"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Top Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5">
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
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-300 hover:text-white px-4 py-3 rounded-xl font-medium text-sm transition-all group/btn"
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
                          className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-purple-500/30 transition-all group/btn"
                        >
                          <ExternalLink
                            size={16}
                            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          />
                          Live Demo
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 bg-slate-800/50 border border-slate-700/50 text-gray-600 px-4 py-3 rounded-xl font-medium text-sm cursor-not-allowed">
                          <ExternalLink size={16} />
                          Soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://github.com/daanny214"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 border-2 border-purple-500/50 hover:border-purple-400 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all group"
          >
            <Github
              size={22}
              className="group-hover:rotate-12 transition-transform"
            />
            Explore More on GitHub
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
