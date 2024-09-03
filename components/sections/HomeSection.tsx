import { FileText } from "lucide-react";
import AnimatedText from "../AnimatedText";
import StaggeredLetters from "../StaggeredLetters";
import FlowerAnimation from "../FlowerAnimation";
import Button from "../Button";
import FadeinText from "../FadeinText";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen snap-start flex flex-col items-center justify-center text-[7rem] leading-none gap-20 pt-10 font-montserrat"
    >
      <div className="w-11/12 flex justify-between">
        <div className="flex justify-center flex-col">
          <AnimatedText>I CREATE</AnimatedText>
          <StaggeredLetters className="font-serif italic">
            Beautiful
          </StaggeredLetters>
        </div>
        <FlowerAnimation color="white" />
      </div>
      <div className="w-11/12 flex justify-between">
        <div className="flex justify-end flex-col items-center">
          <Button>
            Resume
            <FileText size={30} />
          </Button>
        </div>

        <div>
          <AnimatedText className="text-end">WEB & MOBILE</AnimatedText>
          <StaggeredLetters className="justify-end font-serif italic">
            Experiences
          </StaggeredLetters>
        </div>
      </div>
    </section>
  );
}
