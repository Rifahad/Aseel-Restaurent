import React from "react";

const ThreeLines = () => {
  return (
    <>
      <div className="hidden md:block w-16 h-[170px] bg-primary absolute -top-6 right-[200px] skew-y-12"></div>
      <div className="hidden md:block w-16 h-[270px] bg-primary absolute -top-6 right-[100px] skew-y-12"></div>
      <div className="hidden md:block w-16 h-[370px] bg-primary absolute -top-6 right-0 skew-y-12"></div>
    </>
  );
};

export default ThreeLines;
