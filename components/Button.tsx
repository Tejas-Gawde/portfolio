"use client";
import { motion } from "framer-motion";

export default function Button({
  children,
}: {
  children: string | React.ReactNode;
}) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="w-fit h-fit border px-16 py-7 rounded-full text-2xl font-montserrat flex gap-5"
    >
      {children}
    </motion.button>
  );
}
