"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedRectangles({
  color,
}: {
  color: "white" | "black";
}) {
  const numRectangles = 12;
  const rotationStep = 360 / numRectangles;

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: numRectangles }).map((_, index) => {
        const angle = rotationStep * index;
        return (
          <motion.rect
            key={index}
            x="50"
            y="50"
            width="8"
            height="100"
            fill={color}
            stroke={color}
            strokeWidth="2"
            // Rotate each rectangle around the center
            initial={{ rotate: angle }}
            animate={{ opacity: 1, rotate: angle + 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </motion.svg>
  );
}
