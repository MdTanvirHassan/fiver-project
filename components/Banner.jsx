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
          <h2 className="py-2 text-center text-6xl font-extrabold leading-10 tracking-normal">
            Best Place for Unfinished Games
          </h2>
          <p className="text-center py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corporis in error?
          </p>
          <div className="text-center">
            <button class="relative inline-flex items-center justify-center p-0.5 px-10 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-transparent to-transparent group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-500 border-2 border-cyan-500">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent ">
                Sign Up
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 px-10 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-transparent to-transparent group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-500 border-2 border-cyan-500">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent ">
                Log In
              </span>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
