import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiTypescript,
  SiNuxtdotjs,
  SiDjango,
  SiSupabase,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";

import IconWrapper from "./IconWrapper";

export default function SkillGroup() {
  return (
    <>
      <div className="mb-5 flex gap-7">
        <IconWrapper color="hsl(190, 98%, 49%)">
          <FaReact size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(0, 0%, 0%)">
          <SiNextdotjs size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(148, 54%, 54%)">
          <IoLogoVue size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(0, 0%, 0%)">
          <SiExpress size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(91, 60%, 51%)">
          <FaNodeJs size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(346, 75%, 51%)">
          <SiNestjs size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(149, 78%, 32%)">
          <SiMongodb size={75} />
        </IconWrapper>
      </div>
      <div className="flex gap-7">
        <IconWrapper color="hsl(204, 100%, 40%)">
          <SiTypescript size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(0, 0%, 0%)">
          <GrMysql size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(38, 100%, 54%)">
          <RiFirebaseFill size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(155, 100%, 43%)">
          <SiNuxtdotjs size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(157, 67%, 11%)">
          <SiDjango size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(180, 69%, 44%)">
          <RiTailwindCssFill size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(4, 87%, 56%)">
          <FaGitAlt size={75} />
        </IconWrapper>
        <IconWrapper color="hsl(153, 60%, 53%)">
          <SiSupabase size={75} />
        </IconWrapper>
      </div>
    </>
  );
}
