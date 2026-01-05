"use client";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-t border-slate-800 bg-slate-950/95 px-6 py-20 scroll-mt-24 md:scroll-mt-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">
            Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 tracking-tight">
            Where I&apos;ve been building
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-400">
            A short timeline of my journey working with the MERN stack, building real-world
            applications and collaborating with teams.
          </p>
        </header>

        <div className="relative mx-auto max-w-3xl">
          <div className="pointer-events-none absolute inset-y-2 left-2 w-px bg-gradient-to-b from-accent/0 via-accent/70 to-accent/0" />

          <div className="flex flex-col gap-6">
            <div className="relative flex gap-4">
              <div className="mt-2 flex h-5 w-5 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full border border-accent bg-slate-950 shadow-[0_0_18px_rgba(148,249,255,0.8)]" />
              </div>
              <div className="group cursor-target flex-1 rounded-2xl border border-slate-800/80 bg-slate-950/85 px-4 py-3 transition-transform transition-shadow hover:-translate-y-1 hover:border-accent/80 hover:shadow-[0_18px_45px_rgba(15,23,42,0.95)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-accent/80">
                    2026 — Present
                  </span>
                  <span className="text-[11px] text-slate-400">MERN Stack Developer</span>
                </div>
                <h3 className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                  Full‑stack MERN Projects
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Building and maintaining portfolio projects like e‑commerce, inventory, LMS,
                  and job portal apps using the MERN stack.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-medium text-slate-300">
                  <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                    Freelance / Personal work
                  </span>
                  <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                    React • Next.js • Node
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex gap-4">
              <div className="mt-2 flex h-5 w-5 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full border border-accent/80 bg-slate-950" />
              </div>
              <div className="group cursor-target flex-1 rounded-2xl border border-slate-800/80 bg-slate-950/75 px-4 py-3 transition-transform transition-shadow hover:-translate-y-1 hover:border-accent/80 hover:shadow-[0_18px_45px_rgba(15,23,42,0.95)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-accent/60">
                    2024 — 2025
                  </span>
                  <span className="text-[11px] text-slate-400">Backend & API Development</span>
                </div>
                <h3 className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                  REST APIs & Auth
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Implemented REST APIs, JWT authentication, and role‑based access for various
                  internal tools and dashboards.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-medium text-slate-300">
                  <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                    Node.js • Express
                  </span>
                  <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                    MongoDB • JWT
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex gap-4">
              <div className="mt-2 flex h-5 w-5 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full border border-slate-600 bg-slate-950" />
              </div>
              <div className="group cursor-target flex-1 rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 transition-transform transition-shadow hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-500">
                    2023 — 2024
                  </span>
                  <span className="text-[11px] text-slate-400">Learning & Foundations</span>
                </div>
                <h3 className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                  JavaScript & React Basics
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Built smaller UI components and mini‑projects while learning JavaScript,
                  React, and modern tooling.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-medium text-slate-300">
                  <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                    Self‑taught & courses
                  </span>
                  <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
                    JavaScript • React
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
