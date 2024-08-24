"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCursorStore from "@/store/store";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnScreen, setIsOnScreen] = useState(false);
  const { isVisible } = useCursorStore() as { isVisible: boolean };
  const lastKnownPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const newPosition = { x: ev.clientX, y: ev.clientY };
      setMousePosition(newPosition);
      lastKnownPosition.current = newPosition;
    };

    const handleMouseEnter = (ev: MouseEvent) => {
      setIsOnScreen(true);
      updateMousePosition(ev);
    };

    const handleMouseLeave = () => {
      setIsOnScreen(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
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
            x: lastKnownPosition.current.x - 5,
            y: lastKnownPosition.current.y - 5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            x: lastKnownPosition.current.x - 5,
            y: lastKnownPosition.current.y - 5,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
        />
      )}
    </AnimatePresence>
  );
}
