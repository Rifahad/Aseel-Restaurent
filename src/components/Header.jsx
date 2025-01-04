import React from "react";
import Logo from "../assets/Logo.png";
import { MdOutlineHome,MdFoodBank } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <div className="md:hidden fixed z-50 w-[95%] h-16 rounded-full bg-black  bottom-2 flex items-center justify-evenly">
        <Link to="/" className="flex flex-col items-center justify-center">
          <MdOutlineHome className="text-3xl text-white " />
          <p className="text-primary text-md">Home</p>
        </Link>
        <Link to="/search" className="flex flex-col items-center justify-center">
          <MdFoodBank  className="text-3xl text-white " />
          <p className="text-white text-md">Category</p>
        </Link>
        <Link to="/search" className="flex flex-col items-center justify-center">
          <IoFastFood  className="text-3xl text-white " />
          <p className="text-white text-md">Special</p>
        </Link>
        <Link to="/search" className="flex flex-col items-center justify-center">
          <IoIosSearch  className="text-3xl text-white " />
          <p className="text-white text-md">Search</p>
        </Link>
      </div>
    </>
  );
};

export default Header;
