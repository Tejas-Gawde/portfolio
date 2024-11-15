"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "../Heading";
import MagneticButton from "../MagneticButton";
import ProjectList from "../project/ProjectList";
import useCursorStore from "@/store/store";
import { tree } from "next/dist/build/templates/app-page";

const projects = [
  {
    image: "https://picsum.photos/200/300",
    title: "Project 1",
    link: "https://www.google.com",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Project 2",
    link: "https://www.google.com",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Project 3",
    link: "https://www.google.com",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Project 4",
    link: "https://www.google.com",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Project 5",
    link: "https://www.google.com",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Project 6",
    link: "https://www.google.com",
  },
];

export default function ProjectSection() {
  const { setIsVisible } = useCursorStore();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

  return (
    <motion.section
      onHoverStart={() => {
        setIsVisible(true);
      }}
      ref={sectionRef}
      style={{ y }}
      id="projects"
      className="bg-charcoalblack mb-16 flex h-[160vh] flex-col items-center"
    >
      {/* <ProjectList projects={projects} /> */}
    </motion.section>
  );
}
