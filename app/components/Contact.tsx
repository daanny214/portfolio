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
} from "lucide-react";

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
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "disiyemi@gmail.com",
      href: "mailto:daanny214@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 8106660790",
      href: "tel:+2348106660790",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
  ];

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a project in mind? Let's work together!
          </p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Let's talk about your project
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
                I'm currently available for freelance work and full-time
                positions. Whether you have a question, a project idea, or just
                want to say hi — my inbox is always open!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8 sm:mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-purple-500 group-hover:bg-purple-600 transition-all shrink-0">
                        <Icon
                          size={18}
                          className="text-purple-400 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">{item.label}</p>
                        <p className="text-gray-200 text-sm sm:text-base font-medium">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Find me on</p>
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
                      className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 hover:border-purple-500 hover:bg-purple-600 transition-all"
                    >
                      <Icon
                        size={18}
                        className="text-gray-400 hover:text-white"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-5 sm:p-8 border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full bg-slate-700 border border-slate-600 focus:border-purple-500 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-700 border border-slate-600 focus:border-purple-500 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-700 border border-slate-600 focus:border-purple-500 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-700 border border-slate-600 focus:border-purple-500 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all text-sm sm:text-base"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="bg-green-900/40 border border-green-600 text-green-400 px-4 py-3 rounded-lg text-sm text-center">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="bg-red-900/40 border border-red-600 text-red-400 px-4 py-3 rounded-lg text-sm text-center">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
