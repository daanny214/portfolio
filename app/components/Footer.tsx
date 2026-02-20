import { Github, Linkedin, Twitter, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-10">
          {/* Brand */}
          <div>
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-purple-800 rounded-lg blur group-hover:blur-md transition-all" />

                {/* Icon Container */}
                <div className="relative bg-linear-to-br from-purple-500 to-purple-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Code2 className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Text Logo */}
              <div className="flex items-center">
                <span className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
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
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Have a project in mind? I'd love to hear from you!
            </p>
            <a
              href="#contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} dan.&lt;dev&gt; · Turning coffee ☕
            into code since 2024
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-slate-800 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all"
                >
                  <Icon size={16} className="text-gray-400 hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
