"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  y?: number;
}

export default function Reveal({ children, delay = 0, width = "100%", y = 24 }: RevealProps) {
  return (
    <div style={{ position: "relative", width, overflow: "visible", height: "100%" }}>
      <motion.div
        style={{ height: "100%" }}
        variants={{
          hidden: { opacity: 0, y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}