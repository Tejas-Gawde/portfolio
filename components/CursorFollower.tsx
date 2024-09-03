"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCursorStore from "@/store/store";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnScreen, setIsOnScreen] = useState(false);
  const { isVisible } = useCursorStore() as { isVisible: boolean };

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdateTime = 0;
    const updateInterval = 1000 / 60; // 60 FPS

    const updateMousePosition = (ev: MouseEvent) => {
      const currentTime = performance.now();
      if (currentTime - lastUpdateTime > updateInterval) {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
        lastUpdateTime = currentTime;
      }
    };

    const handleMouseMove = (ev: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => updateMousePosition(ev));
    };

    const handleMouseEnter = () => {
      setIsOnScreen(true);
    };

    const handleMouseLeave = () => {
      setIsOnScreen(false);
      cancelAnimationFrame(animationFrameId);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && isOnScreen && (
        <motion.div
          className="fixed w-2 h-2 rounded-full bg-white pointer-events-none"
          initial={{
            opacity: 0,
            scale: 0,
            x: mousePosition.x - 4,
            y: mousePosition.y - 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x - 4,
            y: mousePosition.y - 60,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            x: mousePosition.x - 4,
            y: mousePosition.y - 60,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 350,
          }}
        />
      )}
    </AnimatePresence>
  );
}
