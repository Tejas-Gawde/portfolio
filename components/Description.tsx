"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const slideUp = {
  open: (i) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.3, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export default function Description() {
  const phrase =
    "From code to creation, I deliver innovative solutions with precision and passion. Let’s build the future together, one skill at a time.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className="mb-10 flex w-3/4 justify-center">
      <div className="relative flex gap-12">
        <p className="gap-2 text-justify text-3xl leading-relaxed">
          {phrase.split(" ").map((word, index) => (
            <span className="relative inline-flex overflow-hidden" key={index}>
              <motion.span
                initial={{ opacity: 0, y: "100%" }}
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                className="mr-1"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[60%] text-lg font-light"
        >
          With a keen eye for aesthetics and a deep understanding of technology,
          Crafting seamless, engaging experiences that push boundaries and
          elevate digital presence.
        </motion.p>
      </div>
    </div>
  );
}
