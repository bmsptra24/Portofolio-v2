"use client";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";

export const Button = () => {
  const { scrollYProgress } = useScroll();
  const [position, setPosition] = useState(0);

  scrollYProgress.on("change", (y) => {
    setPosition(y);
  });

  return <p className="fixed">{position}</p>;
};
