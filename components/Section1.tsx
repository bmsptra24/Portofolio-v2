import { spaceGrotesk, titilliumWeb } from "@/styles/global";
import React from "react";
import { LeftSection } from "./LeftSection";
import { Reveal } from "@/animations/Reveal";

export const Section1 = () => {
  return (
    <section className="flex h-screen">
      <LeftSection />
      <div className="w-3/4 flex items-center lg:pl-5 pt-14">
        <div className={`${spaceGrotesk.className} text-7xl lg:text-9xl`}>
          <Reveal
            variant={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            delay={0.8}
          >
            <p>Bima Saputra</p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            delay={1.2}
          >
            <p className={`${titilliumWeb.className} text-2xl mt-4 ml-1 lg:ml-3`}>
              Frontend developer anthusias
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
