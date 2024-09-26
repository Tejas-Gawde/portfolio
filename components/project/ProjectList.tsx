"use client";
import Card from "./Card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

interface ProjectProps {
  image: string;
  title: string;
  link: string;
}

export default function ProjectList({
  projects,
}: {
  projects: ProjectProps[];
}) {
  const FAST_DURATION = 15;
  const SLOW_DURATION = 200;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [xTranslation, duration, width, mustFinish, rerender]);

  return (
    <main className="mt-3 overflow-hidden">
      <div className="absolute left-0 right-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex w-max"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...projects, ...projects].map((project, idx) => (
            <Card project={project} key={idx} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
