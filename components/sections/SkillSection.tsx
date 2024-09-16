import MagneticButton from "../MagneticButton";
import Heading from "../Heading";
import SkillGroup from "../SkillGroup";
import AnimatedText from "../AnimatedText";
import Description from "../Description";

export default function SkillSection() {
  return (
    <section id="skill" className="flex h-screen flex-col items-center">
      <div className="flex w-3/4 justify-start">
        <MagneticButton className="mb-4">
          <Heading>Skills</Heading>
        </MagneticButton>
      </div>
      <Description />
      <SkillGroup />
    </section>
  );
}
