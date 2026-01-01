"use client";

import SpotlightCard from "@/components/SpotlightCard";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative border-t border-slate-800 bg-slate-950/90 px-6 py-20 overflow-hidden scroll-mt-24 md:scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(158,249,255,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_transparent_65%)] opacity-70" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">
            Skills
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 tracking-tight">
            My skills map
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-400">
            A quick overview of the technologies and tools I use to build full-stack applications.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6">
          <SpotlightCard className="border-slate-800/90 bg-slate-950/95 px-10 py-5 text-center shadow-[0_0_80px_rgba(148,249,255,0.35)]">
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent/90">
              My Skills
            </p>
          </SpotlightCard>

          <div className="hidden w-full items-center justify-center gap-28 text-slate-700 md:flex">
            <div className="flex items-center gap-2">
              <div className="h-10 w-px bg-slate-700/80" />
              <div className="h-px w-32 bg-slate-700/80" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-32 bg-slate-700/80" />
              <div className="h-10 w-px bg-slate-700/80" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-950/70 px-5 py-6 shadow-[0_18px_55px_rgba(15,23,42,0.95)]">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "Framer Motion"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-colors hover:border-accent/80 hover:text-accent hover:bg-accent/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Backend & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "JWT Auth"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-colors hover:border-accent/80 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Tools & Workflow
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git & GitHub", "VS Code", "Postman", "Figma (basic)", "Vercel / Netlify"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-colors hover:border-accent/80 hover:text-accent hover:bg-accent/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Problem solving", "Clean code", "Communication", "Collaboration"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] transition-colors hover:border-accent/80 hover:text-accent hover:bg-accent/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
