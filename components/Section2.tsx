"use client";
import { spaceGrotesk, titilliumWeb } from "@/styles/global";
import React, { useEffect } from "react";
import { LeftSection } from "./LeftSection";
import { Reveal } from "@/animations/Reveal";
import { variantReveal } from "@/animations/variant";
import { Meteor } from "./Meteor";
import iconJs from "../public/js.png";
import anime from "animejs";

export const Section2 = () => {
  useEffect(() => {
    const path = anime.path("svg path");
    console.log(path("y"));

    anime({
      targets: ".meteor",
      translateX: path("x"),
      translateY: path("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 1000,
      loop: true,
      direction: "alternate",
    });
  }, []);

  // useEffect(() => {
  //   const motionPath = document.querySelector("#motion-path path");
  //   const totalLength = motionPath.getTotalLength();

  //   anime({
  //     targets: ".meteor",
  //     translateX: [0, totalLength],
  //     easing: "linear",
  //     duration: 20000,
  //     loop: true,
  //     direction: "alternate",
  //     update: function (anim) {
  //       const pos = motionPath.getPointAtLength(anim.progress * totalLength);
  //       anime.set(".meteor", {
  //         translateX: pos.x,
  //         translateY: pos.y,
  //       });
  //     },
  //   });
  // }, []);

  return (
    <section className="flex h-screen">
      <LeftSection />
      <div className="w-3/4 flex items-center pl-5 pt-14 relative">
        <div className={`flex flex-col items-end absolute top-32 right-28`}>
          <Reveal variant={variantReveal.t}>
            <p className={`${spaceGrotesk.className} text-8xl`}>Tech Stack</p>
          </Reveal>
          <Reveal variant={variantReveal.l}>
            <p className={`${titilliumWeb.className} text-2xl mt-4`}>
              Tools I using
            </p>
          </Reveal>
        </div>
        <div className="absolute inset-0 -z-40">
          <div className="relative w-full h-full">
            {/* comet */}
            <div className="meteor">
              <Meteor src={iconJs.src}></Meteor>
            </div>
            <svg
              id="motion-path"
              width="700"
              height="400"
              viewBox="0 0 867 488"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-20 bottom-12"
            >
              <path
                d="M859.196 340.02C845.681 399.704 786.579 444.013 700.113 466.652C613.838 489.242 501.312 489.924 383.058 463.145C264.804 436.366 163.55 387.274 95.423 329.72C27.1464 272.039 -7.10128 206.59 6.41407 146.907C19.9294 87.2235 79.0317 42.9145 165.497 20.2749C251.773 -2.31505 364.298 -2.99675 482.552 23.782C600.806 50.5607 702.06 99.6529 770.187 157.208C838.464 214.888 872.712 280.337 859.196 340.02Z"
                stroke="#FF0000"
              />
            </svg>

            {/* <p className="tes bg-black">tes</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
