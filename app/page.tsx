import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-x-hidden overflow-scroll scroll-smooth">
      <Navbar />
      <CursorFollower />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
