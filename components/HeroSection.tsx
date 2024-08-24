"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Variants for text reveal animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const textRevealVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="flex flex-col p-20 items-center justify-center h-[90vh] font-anton text-8xl  overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {["I create", "beautiful", "Web", "Experiences"].map((text, index) => (
        <div className="relative overflow-hidden mb-6" key={index}>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 origin-left"
            variants={lineVariants}
          />
          <motion.p variants={textRevealVariants} className="relative">
            {text}
          </motion.p>
        </div>
      ))}
    </motion.div>
  );
}
