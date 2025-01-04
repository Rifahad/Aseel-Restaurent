import React from "react";
import Logo from "../assets/Logo.png";
import { MdOutlineHome } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";


const Header = () => {
  return (
    <>
      <div className=" header">
        <img src={Logo} alt="" className="w-44 " />
        <div className="flex items-center justify-center gap-2 md:gap-9">
          <p className="text-primary">Home</p>
          <p>Category</p>
          <h1>Our Special</h1>
        </div>
      </div>
      <div className="md:hidden fixed w-[95%] h-16 rounded-full bg-black  bottom-2 flex items-center justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <MdOutlineHome className="text-3xl text-white " />
          <p className="text-primary text-md">Home</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MdFoodBank  className="text-3xl text-white " />
          <p className="text-white text-md">Category</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MdOutlineHome className="text-3xl text-white " />
          <p className="text-white text-md">Special</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MdOutlineHome className="text-3xl text-white " />
          <p className="text-white text-md">Search</p>
        </div>
      </div>
    </>
  );
};

export default Header;
