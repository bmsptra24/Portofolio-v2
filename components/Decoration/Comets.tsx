"use client";
import React from "react";
import { comets } from "./Comet";

export const Comets = () => {
  return <div className="fixed inset-0 -z-10 flex">{comets()}</div>;
};
