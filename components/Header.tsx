import { Reveal } from "@/animations/Reveal";
import { variantReveal } from "@/animations/variant";
import { sosmedLink } from "@/config-main";
import { titilliumWeb } from "@/styles/global";
import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
export const Header = () => {
  return (
    <header className="container mx-auto px-28 h-20 flex items-center justify-between fixed z-10">
      <Reveal variant={variantReveal.t}>
        <p
          className={`${titilliumWeb.className} cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out`}
        >
          About
        </p>
      </Reveal>
      <Reveal variant={variantReveal.t}>
        <div className="text-2xl flex gap-5">
          <Link target="_blank" href={sosmedLink.mail}>
            <AiOutlineMail
              className="cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out"
              title="Mail"
            />
          </Link>
          <Link target="_blank" href={sosmedLink.linkedin}>
            <AiFillLinkedin
              className="cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out"
              title="Linkedin"
            />
          </Link>
          <Link target="_blank" href={sosmedLink.github}>
            <AiOutlineGithub
              className="cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out"
              title="Github"
            />
          </Link>
        </div>
      </Reveal>
    </header>
  );
};
