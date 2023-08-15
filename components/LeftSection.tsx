import React from "react";

export const LeftSection = ({ children, className }: any) => {
  return (
    <div className={`${className} w-1/4 flex justify-end`}>{children}</div>
  );
};
