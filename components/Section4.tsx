import { spaceGrotesk, titilliumWeb } from "@/styles/global";
import React from "react";
import { LeftSection } from "./LeftSection";
import { Reveal } from "@/animations/Reveal";

export const Section4 = () => {
  return (
    <section className="flex h-[850px]">
      <LeftSection />
      <div className="w-3/4 flex items-center pl-5 pt-14">
        <div className={`${spaceGrotesk.className}`}>
          <Reveal
            variant={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            delay={0.8}
          >
            <p className="text-8xl">Made with</p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            delay={1.2}
          >
            <div
              className={`${titilliumWeb.className} text-2xl mt-4 ml-2 grid grid-cols-2`}
            >
              <ul className="flex flex-col gap-1">
                <li>Next JS</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Anime JS</li>
                <li>Photoshop</li>
              </ul>
              {/* <ul className="flex flex-col gap-1">
                <li>+62 cups of coffee</li>
                <li>Endless references</li>
                <li>2 easter eggs</li>
              </ul> */}
              <ul className="flex flex-col gap-1">
                <li>Tulus🎶</li>
                <li>Mayudi Ayunda🎶</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
