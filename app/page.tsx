import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
  <div className="">
      <Navbar/>
      <CursorFollower/>
      <HomeSection />
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
  </div>
)
}
