"use client";

import { Briefcase, Calendar, MapPin, Download } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Apps Built", value: "5+" },
    { label: "Happy Clients", value: "3" },
    { label: "Technologies", value: "10+" },
  ];

  //   const technologies = [
  //     "React", "React Native", "Next.js", "JavaScript",
  //     "TypeScript", "Node.js", "Firebase", "Git", "GitHub", "Figma",
  //   ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            From Lagos 🇳🇬 — building apps the world uses.
          </p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left - Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden  border-white shadow-lg shadow-purple-500/30">
                <img
                  src="/profile.png"
                  alt="Daniel Isiyemi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-lg text-sm sm:text-base">
                Available for hire! 🚀
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Web & Mobile Developer based in{" "}
              <span className="text-purple-400">Lagos, Nigeria</span>
            </h3>

            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I'm Daniel, a passionate Web & Mobile Developer with over a year
              of hands-on experience building cross-platform mobile apps with
              React Native and modern web applications with Next.js. I enjoy
              turning ideas into clean, performant and user-friendly products
              that solve real problems.
            </p>

            <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              When I'm not coding, you'll find me listening to music or diving
              deep into new technologies — I'm always curious about what's next
              in the world of software development.
            </p>

            {/* Details */}
            <div className="space-y-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                <MapPin size={18} className="text-purple-400 shrink-0" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                <Briefcase size={18} className="text-purple-400 shrink-0" />
                <span>Open to Freelance & Full-time Roles</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                <Calendar size={18} className="text-purple-400 shrink-0" />
                <span>1+ Year of Experience</span>
              </div>
            </div>

            {/* Tech Tags */}
            {/* <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-700 hover:bg-purple-600 text-gray-300 hover:text-white px-3 py-1 rounded-full text-xs sm:text-sm transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div> */}

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-14 sm:mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900 rounded-xl p-4 sm:p-6 text-center border border-slate-700 hover:border-purple-500 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
