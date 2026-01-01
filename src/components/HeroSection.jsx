"use client";

import SplitText from "@/components/SplitText";
import { GridScan } from "@/components/GridScan";

export default function HeroSection() {
  return (
    <section className="relative px-6 py-16 overflow-hidden h-[calc(100vh-4rem)] scroll-mt-24 md:scroll-mt-32" id="home">
      <div className="absolute inset-0 z-0">
        <GridScan
          className="pointer-events-none h-full w-full"
          enableWebcam={false}
          showPreview={false}
          enablePost={true}
          linesColor="#392e4e"
          scanColor="#14f040"
          lineJitter={0}
          lineThickness={1}
          scanGlow={0.1}
          scanOpacity={0.5}
          bloomSmoothing={true}
          gridScale={0.08}
          bloomIntensity={0.6}
          scanSoftness={2}
          noiseIntensity={0.02}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center text-center gap-6">
        <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-accent/80">
          MERN Stack Developer
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-50">
          Hi, I&apos;m Farhan
        </h1>

        <SplitText
          delay={100}
          text={["Full-Stack Developer", "Frontend Developer", "Backend Developer"]}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-accent"
        />

        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300">
          I build clean, performant web applications using MongoDB, Express, React , Next.js and Node.js.
          Focused on great developer experience, modern & responsive UI.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-slate-950 hover:bg-accent/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-6 py-2 text-sm font-medium text-slate-200 hover:border-accent hover:text-accent transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
