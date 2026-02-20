"use client";

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-slate-900 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Avatar */}
        <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden  border-white shadow-lg shadow-purple-100/30">
          <img
            src="/profile.png"
            alt="Daniel Isiyemi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          Daniel Isiyemi
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-purple-400 font-semibold mb-4 sm:mb-6">
          Web & Mobile Application Developer
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
          Passionate developer with almost 2 years of experience building
          cross-platform mobile apps with React Native and modern web
          applications with Next.js. Available for freelance & full-time roles.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 px-4 sm:px-0">
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all text-base sm:text-lg w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-purple-400 hover:bg-purple-400 hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all text-base sm:text-lg w-full sm:w-auto text-center"
          >
            Hire Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="GitHub"
          >
            <Github size={26} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Email"
          >
            <Mail size={26} />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" size={28} />
      </div>
    </section>
  );
}
