import React from "react";

export const LeftSection = ({ children, className }: any) => {
  return (
    <div className={`${className} w-10 lg:w-1/4 flex justify-end`}>{children}</div>
  );
};
