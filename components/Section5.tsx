"use client";
import { spaceGrotesk, titilliumWeb } from "@/styles/global";
import React from "react";
import { LeftSection } from "./LeftSection";
import { Reveal } from "@/animations/Reveal";
import anime from "animejs";

export const Section5 = () => {
  return (
    <section className="flex h-[500px] pb-40">
      <LeftSection />
      <div className="w-3/4 flex items-center pl-5 mt-14">
        <div className={`${spaceGrotesk.className}`}>
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            delay={1.2}
          >
            <p className={`${titilliumWeb.className} text-2xl mt-4 ml-2`}>
              Need a frontend developer?
            </p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            delay={0.8}
          >
            <p className="text-8xl cursor-pointer transition-all mt-2 no-underline hover:underline ease-in-out">{`Let’s work together`}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
