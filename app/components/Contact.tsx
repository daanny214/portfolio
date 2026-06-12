"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "../lib/site";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
    href: "#",
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: site.github },
  { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
  { icon: Twitter, label: "Twitter", href: site.twitter },
];

const inputClasses =
  "w-full bg-white/5 border border-white/10 focus:border-purple-400/70 focus:bg-purple-500/5 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          tag="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          {/* Left — Contact Info */}
          <Reveal direction="left" className="flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-5 tracking-tight">
                Let&apos;s talk about your{" "}
                <span className="text-gradient">project</span>
              </h3>
              <p className="text-gray-400 mb-9 leading-relaxed text-sm sm:text-base">
                I&apos;m currently available for freelance work and full-time
                positions. Whether you have a question, a project idea, or just
                want to say hi — my inbox is always open!
              </p>

              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group p-3 -mx-3 rounded-2xl hover:bg-white/3 transition-all"
                    >
                      <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20 group-hover:border-purple-400/50 group-hover:bg-linear-to-br group-hover:from-violet-600 group-hover:to-fuchsia-600 transition-all duration-300 shrink-0">
                        <Icon
                          size={19}
                          className="text-purple-400 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                          {item.label}
                        </p>
                        <p className="text-gray-200 text-sm sm:text-base font-medium">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                Find me on
              </p>
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
                      className="w-11 h-11 bg-white/3 rounded-xl flex items-center justify-center border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right — Contact Form */}
          <Reveal direction="right">
            <div className="relative bg-white/3 rounded-3xl p-6 sm:p-9 border border-white/5">
              <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-purple-500/60 to-transparent" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-gray-400 text-sm mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-gray-400 text-sm mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-gray-400 text-sm mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-gray-400 text-sm mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 text-sm sm:text-base group"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={18}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="animate-fade-down flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl text-sm">
                    <CheckCircle2 size={16} className="shrink-0" />
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="animate-fade-down flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
                    <AlertCircle size={16} className="shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
