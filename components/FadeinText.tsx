"use client";
import { motion } from "framer-motion";

export default function FadeinText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.p>
  );
}
