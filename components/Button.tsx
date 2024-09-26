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
      className="flex h-fit w-fit gap-5 rounded-full border px-16 py-7 font-montserrat text-2xl"
    >
      {children}
    </motion.button>
  );
}
