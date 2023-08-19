"use client";
import { cometsConfig } from "@/config-main";
import { getRandomNumber } from "@/features/getRandomNumber";
import anime from "animejs";
import { useEffect } from "react";

const style: () => React.CSSProperties = () => {
  return {
    left: getRandomNumber(0, 90) + "vw",
    top: getRandomNumber(0, 90) + "vh",
  };
};

const animation = (id: number) => {
  const opacityAnimate: (opacity: number) => void = (opacity) => {
    anime({
      targets: "#comet-" + id,
      opacity: opacity,
    });
  };
  anime({
    targets: "#comet-" + id,
    keyframes: [
      { opacity: 1, translateY: 1000, translateX: -1000 },
      //   { scale: 0 },
    ],
    easing: "linear",
    duration: 1000,
    loop: true,
    delay: getRandomNumber(1000, 20000),
    // delay: 100,
    begin: () => opacityAnimate(1),
    complete: () => opacityAnimate(0),
  });
};

export const comets = () => {
  const CreateComet = ({ id }: any) => {
    useEffect(() => {
      animation(id);
    }, []);

    return (
      <div
        id={"comet-" + id}
        className="absolute opacity-0 flex justify-center items-center"
        style={style()}
      >
        <i className={`absolute bg-slate-50 h-px w-24 rounded-lg -rotate-45`}>
          &nbsp;
        </i>
        <i
          className={`absolute bg-slate-50 h-1 w-24 rounded-lg -rotate-45 blur-xl`}
        >
          &nbsp;
        </i>
      </div>
    );
  };

  const comets = [];
  for (let comet = 0; comet < cometsConfig.total; comet++) {
    comets.push(<CreateComet key={comet} id={comet} />);
  }

  return comets;
};
