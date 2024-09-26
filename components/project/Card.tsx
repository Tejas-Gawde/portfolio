import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project: {
    image: string;
    title: string;
    link: string;
  };
}

const imgvariant = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
    zIndex: 10,
  },
};

const textVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  hover: {
    opacity: 1,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Card({ project }: ProjectProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center overflow-visible pb-10"
      whileHover="hover"
      initial="initial"
      variants={imgvariant}
      transition={{ type: "tween", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative h-[325px] w-[275px] overflow-hidden bg-slate-400"
        layoutId={`card-container-${project.title}`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <motion.div
        className="mt-2 text-center"
        variants={textVariants}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <Link
          href={project.link}
          className="text-sm text-blue-600 hover:underline"
        >
          View Project
        </Link>
      </motion.div>
    </motion.div>
  );
}
