"use client";
import { motion } from "framer-motion";

export default function AnimatedFlower({ className }: { className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 360 }}
      whileInView={{ rotate: [0, 360] }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotate: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        },
      }}
    >
      ✺
    </motion.span>
  );
}
