"use client";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
}

export default function AnimatedText({
  children,
  className,
}: AnimatedTextProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
