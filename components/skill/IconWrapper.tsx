"use client";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import useCursorStore from "@/store/store";

interface IconWrapperProps {
  children: ReactElement;
  color?: string;
}

export default function IconWrapper({
  children,
  color = "#000000",
}: IconWrapperProps) {
  const { setIsVisible } = useCursorStore() as {
    setIsVisible: (value: boolean) => boolean;
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        onMouseEnter={() => setIsVisible(false)}
        onMouseLeave={() => setIsVisible(true)}
        initial={{ color: "#808080" }}
        whileHover={{ color: color }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
