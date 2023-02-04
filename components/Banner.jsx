import React from "react";
import banner from "../public/assets/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div id="banner" className="w-full m-0 p-0">
      <div className="w-screen h-screen relative">
        <div className="absolute top-0 left-0 w-full h-screen bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={banner}
          alt="/"
        />
        <div className="absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 ">
          <h2 className="pt-10 text-center text-6xl font-extrabold leading-10 tracking-wider">
            Best Place for Unfinished Games
          </h2>
          <p className="text-center pt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corporis in error?
          </p>
          <div className="text-center pt-14 px-24 md:px-96 grid md:grid-cols-2  gap-4">
            
            <button className="relative text-white bg-transparent  border-2 border-[#009688] hover:border-none focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-3 text-center mr-2 mb-2
             before:absolute before:rounded-full  before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#009688] before:transition-transform before:duration-1000 hover:text-white before:hover:scale-x-100">
                 Sign Up
            </button>
            <button className="relative text-white bg-transparent  border-2 border-[#009688] hover:border-none focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-3 text-center mr-2 mb-2
             before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#009688] before:transition-transform before:duration-1000 before:rounded-full hover:text-white before:hover:scale-x-100">
                 Log In
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
