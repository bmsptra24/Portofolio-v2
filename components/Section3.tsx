"use client";
import { spaceGrotesk, titilliumWeb } from "@/styles/global";
import React from "react";
import { LeftSection } from "./LeftSection";
import { Reveal } from "@/animations/Reveal";
import { projectConfig } from "@/config-main";
import { motion } from "framer-motion";
import anime from "animejs";
import Link from "next/link";

export const Section3 = () => {
  //   const [width, setWidth] = useState(0);
  //   const dragebleContainer = useRef(null);
  //   useEffect(() => {
  //     setWidth(
  //       dragebleContainer.current.scrollWidth -
  //         dragebleContainer.current.offsetWidth
  //     );
  //   }, []);
  //   console.log({ width });

  return (
    <section className="flex h-[850px]">
      <LeftSection />
      <div className="w-3/4 flex items-center pl-3 ml-2 pt-14 relative">
        <motion.div
          className="overflow-hidden w-[900px] absolute bottom-28 -left-2 bg-transparent cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <i className="w-8 h-full z-10 bg-gradient-to-r from-two to-transparent absolute letf-0"></i>
          <i
            className="w-32 h-full z-10 bg-gradient-to-l from-two to-transparent absolute right-0"
            onClick={() => {}}
          ></i>
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -(projectConfig.length * 500),
            }}
            className={`flex items-center p-7 h-[530px] w-max`}
          >
            {projectConfig.map(({ img, title, link }, idx) => (
              <div className="flex" key={idx}>
                <div
                  className="relative w-[750px] h-fit px-7 flex justify-center items-center overflow-hidden py-3"
                  id={`project-${idx + 1}`}
                  key={idx}
                >
                  <img
                    // src="https://picsum.photos/1200/800"
                    src={img.src}
                    className={`transition-all ease-in-out pointer-events-none scale-105 opacity-50`}
                  ></img>
                  <Link
                    id="project"
                    className="transition-all absolute text-4xl font-black cursor-pointer"
                    href={link}
                    target="_blank"
                    onMouseOver={() => {
                      anime
                        .timeline({
                          targets: `#project-${idx + 1}>img`,
                          easing: "spring",
                          scale: 0.99,
                          duration: 10,
                          loop: false,
                          opacity: 0.95,
                        })
                        .add({
                          targets: `#project-${idx + 1}>#project`,
                          easing: "spring",
                          scale: 1.2,
                          duration: 10,
                          loop: false,
                        });
                    }}
                    onMouseLeave={() => {
                      anime
                        .timeline({
                          targets: `#project-${idx + 1}>img`,
                          easing: "spring",
                          scale: 1.05,
                          duration: 10,
                          loop: false,
                          opacity: 0.5,
                        })
                        .add({
                          targets: `#project-${idx + 1}>#project`,
                          easing: "spring",
                          scale: 1,
                          duration: 10,
                          loop: false,
                        });
                    }}
                  >
                    {title}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div
          className={`${spaceGrotesk.className} pointer-events-none text-9xl absolute bottom-16 -left-2 pl-9 bg-gradient-to-t from-two to-transparent w-full`}
        >
          <Reveal
            variant={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p>My Project</p>
          </Reveal>
          <Reveal
            variant={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            delay={0.2}
          >
            <p className={`${titilliumWeb.className} text-2xl mt-4 ml-3`}>
              My current project
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
