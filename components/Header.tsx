import { titilliumWeb } from "@/styles/global";
import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
export const Header = () => {
  return (
    <header className="container mx-auto px-28 h-20 flex items-center justify-between fixed z-10">
      <p className={`${titilliumWeb.className} cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out`}>About</p>
      <div className="text-2xl flex gap-5">
        <AiOutlineMail
          className="cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out"
          title="Mail"
        />
        <AiFillLinkedin
          className="cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out"
          title="Linkedin"
        />
        <AiOutlineGithub
          className="cursor-pointer hover:scale-110 hover:text-one transition-all ease-in-out"
          title="Github"
        />
      </div>
    </header>
  );
};
