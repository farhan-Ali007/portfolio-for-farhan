"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import BackToTopButton from "@/components/BackToTopButton";
import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-50" id="home">
      <TargetCursor
        hideDefaultCursor={false}
        spinDuration={2}
        parallaxOn={true}
      />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <BackToTopButton />
    </main>
  );
}