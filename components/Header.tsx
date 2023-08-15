import { titilliumWeb } from "@/styles/global";
import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
export const Header = () => {
  return (
    <header className="container mx-auto px-28 h-20 flex items-center justify-between fixed">
      <p className={`${titilliumWeb.className}`}>About</p>
      <div className="text-2xl flex gap-5">
        <AiOutlineMail />
        <AiFillLinkedin />
        <AiOutlineGithub />
      </div>
    </header>
  );
};
