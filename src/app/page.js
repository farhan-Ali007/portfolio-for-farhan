"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-50" id="home">
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