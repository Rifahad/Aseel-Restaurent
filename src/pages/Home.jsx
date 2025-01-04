import React from "react";
import Header from "../components/Header";
import ThreeLines from "../components/ThreeLines";
import Logo from "../assets/Logo.png";
import BackgroundImage from "../assets/HomeImage.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      {/* Background Section */}
      <div className="w-full rounded-md flex flex-col box relative ">
        <Header />
        <ThreeLines />
        <div className="w-full h-full flex flex-col md:flex-row bg-red-600 md:bg-transparent ">
          <div className="w-full md:w-[50%] h-full flex md:flex-col items-center justify-center">
            <div className="w-[90%] h-auto flex flex-col gap-4 md:gap-12 ">
              <h1 className="font-black text-6xl text-white ">
                <img src={Logo} alt="" className="w-44 md:hidden" />
                Freshness in every
                <span className="text-primary font-thin"> bite</span>
              </h1>
              <p className="text-white">Taste the best that surprise you...</p>
              <button className="w-[250px] bg-black bg-opacity-50 h-14 rounded-full shadow-sm shadow-white text-white text-sm flex items-center justify-center gap-2">
                Detailed Menu here
                <MdOutlineKeyboardDoubleArrowDown className="text-primary" />
              </button>
              <h2 className="text-white">
                Location: Souq Al Furjan 34, Al Thumama, Doha - Qatar
              </h2>
              <p className="text-white">Contact Us: 3391 6168, 4493 9556</p>
            </div>
          </div>
          <div className="w-full md:w-[50%] h-full flex items-center justify-center">
            <img src={BackgroundImage} alt="" />
          </div>
        </div>
      </div>
      {/* section 1 categories listing */}
      <div className="w-full rounded-md flex flex-col box relative mt-8">
        <ThreeLines />
        <div className="flex w-full flex-col h-full bg-red-600 md:bg-transparent">
          <div className="w-full h-[20%] md:h-[30%] flex items-center px-4 md:px-14">
            <img src={Logo} alt="Logo Image" className="w-32" />
            <h1 className="font-black text-3xl md:text-6xl text-white">
              Categories
            </h1>
          </div>
          <div className="w-full h-[80%] md:h-[70%] flex flex-col "></div>
        </div>
      </div>
      {/* section 2 */}
      <h1 className="font-black text-3xl md:text-6xl text-white text-center mt-8 mb-8">
        ALL ITEMS
      </h1>
      <div className="w-full rounded-md flex flex-col box relative mt-8">
        <div className="w-full h-full grid grid-cols-3 gap-4 m-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
