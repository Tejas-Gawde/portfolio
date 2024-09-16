"use client";
import { motion } from "framer-motion";

export default function Heading({ children }: { children: string }) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-full border border-zinc-400 px-12 pb-2 pt-4 text-3xl"
      style={{ height: "2.5em" }}
      whileHover="hover"
    >
      <motion.span
        initial={{ y: 0 }}
        variants={{
          hover: { y: "-150%" },
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ y: "100%" }}
        variants={{
          hover: { y: "-100%" },
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
