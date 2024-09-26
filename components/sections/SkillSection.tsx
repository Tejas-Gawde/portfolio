import MagneticButton from "../MagneticButton";
import Heading from "../Heading";
import SkillGroup from "../skill/SkillGroup";
import Description from "../skill/Description";

export default function SkillSection() {
  return (
    <section id="skill" className="mb-16 flex flex-col items-center">
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
