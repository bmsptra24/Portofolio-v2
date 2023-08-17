"use client";
import React, { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Reveal } from "@/animations/Reveal";

export const Line = () => {
  const { scrollYProgress } = useScroll();
  const [isScroll, setIsScroll] = useState(false);

  const hideOutline = () => {
    setTimeout(() => {
      setIsScroll(false);
    }, 700);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScroll(latest > 0.001);
    if (latest > 0.01) {
      hideOutline();
    }
  });

  return (
    <>
      <Reveal
        variant={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        className="w-10 h-1/2 flex flex-col items-center fixed bottom-0"
      >
        <>
          <Reveal
            variant={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            delay={0.6}
          >
            <motion.div
              animate={{
                outline: isScroll
                  ? "2px solid #D285F2"
                  : "2px solid transparent",
                outlineOffset: isScroll ? "3px" : "0px",
                scale: isScroll ? 1.2 : 1,
              }}
              layout
              transition={{
                opacity: { ease: "easeInOut" },
                layout: { duration: 0.1 },
              }}
              className={`bg-one w-4 h-4 rounded-full transition-all" 
          }`}
            />
          </Reveal>
          <div className="w-px h-[48vh] bg-gradient-to-b from-0% from-one to-transparent" />
        </>
      </Reveal>
      <div className="w-px h-full bg-gradient-to-t from-90% from-three to-transparent absolute mr-5 -z-10" />
    </>
  );
};
