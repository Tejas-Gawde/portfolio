import { FileText } from "lucide-react";
import AnimatedText from "../AnimatedText";
import StaggeredLetters from "../StaggeredLetters";
import Button from "../Button";
import FadeinText from "../FadeinText";
import ParallaxText from "../ParallaxText";

export default function HeroSection() {
  return (
    <section className="h-[90vh] flex flex-col justify-between items-center overflow-hidden">
      
      <AnimatedText>I create beautiful websites</AnimatedText>
      <ParallaxText baseVelocity={-3}>Tejas Gawde&nbsp; ‒&nbsp;</ParallaxText>
    </section>
  );
}
