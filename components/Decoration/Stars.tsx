"use client";
import React, { useEffect } from "react";
import { Star } from "./Star";

export const Stars = () => {
  return <div className="fixed inset-0 -z-10 flex">{Star()}</div>;
};
