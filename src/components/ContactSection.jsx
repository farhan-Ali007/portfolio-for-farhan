"use client";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-slate-800 bg-slate-950 px-6 py-20 overflow-hidden scroll-mt-24 md:scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(158,249,255,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_transparent_70%)]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] md:items-start">
        <div className="flex flex-col gap-6 md:pr-6">
          <header className="flex flex-col gap-2 text-left md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 tracking-tight">
              Let&apos;s build something
              <span className="block text-accent">great together.</span>
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-slate-400">
              Share a quick overview of your idea, timeline, and what you&apos;re looking for.
              I usually respond within 24–48 hours.
            </p>
          </header>

          <div className="mt-2 space-y-3 text-sm text-slate-300">
            <p className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-slate-900/80 text-[11px] font-semibold text-accent">
                @
              </span>
              <span className="truncate">farhancodes36@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-[11px] font-semibold text-slate-300">
                In
              </span>
              <span>Open to remote roles and freelance projects.</span>
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300">
            <a
              href="https://www.facebook.com/share/1ALGBirA3u/" // TODO: replace with your Facebook URL
              aria-label="Facebook"
              className="cursor-target flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 hover:border-accent/80 hover:text-accent transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/f4rh4n2516?igsh=MjF3ZGNoemRuZzV0" // TODO: replace with your Instagram URL
              aria-label="Instagram"
              className="cursor-target flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 hover:border-accent/80 hover:text-accent transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/farhan-ali-61971936a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // TODO: replace with your LinkedIn URL
              aria-label="LinkedIn"
              className="cursor-target flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 hover:border-accent/80 hover:text-accent transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/farhan-Ali007" // TODO: replace with your GitHub URL
              aria-label="GitHub"
              className="cursor-target flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 hover:border-accent/80 hover:text-accent transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.95)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(148,249,255,0.16),_transparent_55%)] opacity-80" />

            <form
              className="relative z-10 space-y-6 text-left"
              onSubmit={handleSubmit}
            >
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-800/90 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/40 placeholder:text-slate-500"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-800/90 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/40 placeholder:text-slate-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full resize-none rounded-lg border border-slate-800/90 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-2 focus:ring-accent/40 placeholder:text-slate-500"
                  placeholder="Tell me a bit about what you have in mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] text-slate-500">
                  I&apos;ll never share your details. No spam, ever.
                </p>
                <button
                  type="submit"
                  className="cursor-target inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_35px_rgba(148,249,255,0.5)] transition-colors hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {status === "success" && (
                <p className="text-xs text-emerald-400">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400">
                  Something went wrong while sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
