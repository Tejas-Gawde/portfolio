"use client";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
}

export default function StaggeredLetters({
  children,
  className,
}: AnimatedTextProps) {
  return (
    <div className={`${className} flex`}>
      {children.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.1, delay: index * 0.07 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
