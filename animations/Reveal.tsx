"use client";
import { useAnimation, useInView, motion, Variants } from "framer-motion";
import React, { useRef } from "react";

type prop = {
  children: JSX.Element;
  variant: Variants;
  className?: string;
  delay?: number;
  duration?: number;
};

export const Reveal = ({
  children,
  variant,
  className = "",
  delay = 0.25,
  duration = 0.5,
}: prop) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  if (isInView) {
    mainControls.start("visible");
  }

  return (
    <div ref={ref} className={`${className}`}>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
        className={`${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
