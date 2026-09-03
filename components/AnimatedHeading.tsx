"use client";

import { motion } from "motion/react";

interface AnimatedHeadingProps {
  /** Use "\n" inside the string wherever you want a line break */
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  /** Seconds between each letter — smaller = faster */
  staggerSpeed?: number;
}

const container = {
  hidden: {},
  visible: (custom: { delay: number; stagger: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const letter = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function AnimatedHeading({
  text,
  className = "",
  as = "h2",
  delay = 0,
  staggerSpeed = 0.018,
}: AnimatedHeadingProps) {
  const Tag = as;
  const lines = text.split("\n");

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
        custom={{ delay, stagger: staggerSpeed }}
        aria-label={text.replace(/\n/g, " ")}
        className="inline-block"
      >
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").flatMap((word, wi) => {
              const wordEl = (
                <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, ci) => (
                    <motion.span key={ci} variants={letter} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </span>
              );
              return wi === 0 ? [wordEl] : [<span key={`s-${wi}`}> </span>, wordEl];
            })}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
