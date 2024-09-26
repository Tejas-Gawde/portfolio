import AnimatedText from "../AnimatedText";
import ParallaxText from "../home/ParallaxText";
import AnimatedFlower from "../home/AnimatedFlower";

export default function HeroSection() {
  return (
    <section className="flex h-screen flex-col justify-around">
      <div className="flex justify-end">
        <div className="w-2/3"></div>
        <div className="flex h-fit w-1/3 flex-col text-5xl">
          <AnimatedFlower className="mb-5 w-fit text-7xl" />
          <AnimatedText>Freelance</AnimatedText>
          <AnimatedText>Web & Mobile</AnimatedText>
          <AnimatedText>Developer</AnimatedText>
        </div>
      </div>
      <ParallaxText baseVelocity={3}>Tejas Gawde&nbsp; ‒&nbsp;</ParallaxText>
    </section>
  );
}
