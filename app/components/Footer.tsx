import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Coffee,
  ArrowUp,
} from "lucide-react";
import { site } from "../lib/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: site.github, label: "GitHub" },
  { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5 group mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-linear-to-br from-violet-500 to-fuchsia-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Code2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex items-baseline font-display">
                <span className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Daniel
                </span>
                <span className="text-lg sm:text-xl font-light text-purple-400 ml-1">
                  .dev
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web & Mobile Developer building beautiful apps with React Native
              and Next.js. Available for freelance & full-time roles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-white font-semibold mb-5 text-xs uppercase tracking-[0.25em]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 hover:translate-x-1 inline-block transition-all text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-white font-semibold mb-5 text-xs uppercase tracking-[0.25em]">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Have a project in mind? I&apos;d love to hear from you!
            </p>
            <a
              href="#contact"
              className="inline-block bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-sm flex items-center gap-1.5 flex-wrap justify-center">
            © {new Date().getFullYear()} dan.&lt;dev&gt; · Turning
            <Coffee size={14} className="text-purple-400 inline" />
            coffee into code since 2024
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/3 hover:bg-purple-500/15 border border-white/10 hover:border-purple-400/50 rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              );
            })}

            {/* Back to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="w-9 h-9 bg-linear-to-br from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-lg flex items-center justify-center transition-all duration-300 text-white shadow-lg shadow-purple-500/25 hover:-translate-y-0.5 ml-1"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
