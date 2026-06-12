"use client";

import { useEffect, useState } from "react";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      let current = "home";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = link.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050608]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-10 h-10 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <p className="font-display text-base sm:text-lg font-bold text-white leading-tight group-hover:text-purple-300 transition-colors">
                Daniel Isiyemi
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Software Developer
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white/3 border border-white/5 rounded-full px-2 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === link.id
                    ? "text-white bg-purple-500/20 shadow-[inset_0_0_0_1px_rgba(168,85,247,0.3)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hire Me Button - Desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 group"
          >
            Hire Me
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-down bg-[#0a0b10]/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`animate-fade-down font-medium text-base py-3 px-4 rounded-xl transition-all ${
                active === link.id
                  ? "text-white bg-purple-500/15"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-5 py-3 rounded-xl font-semibold text-center mt-2 shadow-lg shadow-purple-500/25 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
