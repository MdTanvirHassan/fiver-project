import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo-cattle.png";
import { BiChevronsRight } from "react-icons/bi";

const Footer = () => {
  return (
    <section>
      <footer className=" bg-gray-50 text-gray-500 mt-16">
        <div className=" px-5 pt-12 mx-auto gap-1 md:gap-5 grid md:grid-cols-4  md:items-center  pb-8  ">
          <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
            <div className=" px-4">
              <Image src={logo} className="ml-[35%] md:ml-0" alt='...' />
              <p className="pt-2">contact@example.com</p>
              <p>+1-541-754-3010</p>
            </div>
          </div>
          <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
            <div className=" px-8 ">
              <h3 className="font-bold  text-xl  mb-2 text-black">
                Usefull Links
              </h3>
              <nav className="list-none">
                <li className="">
                  <a className=" text-md hover:text-gray-800 flex space-x-2 ">
                    <BiChevronsRight className="font-extrabold text-xl" />{" "}
                    Mobile Phone
                  </a>
                </li>
                <li>
                  <a className=" text-md hover:text-gray-800 flex space-x-2 ">
                    <BiChevronsRight className="font-extrabold text-xl" />{" "}
                    Laptop
                  </a>
                </li>
                <li>
                  <a className=" text-md hover:text-gray-800 flex space-x-2 ">
                    <BiChevronsRight className="font-extrabold text-xl" />{" "}
                    HeadPhones
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
            <div className=" px-8 ">
              <h3 className="font-bold  text-xl  mb-2 text-black">
                Our policy
              </h3>
              <nav className="list-none">
                <li>
                  <a className=" text-md hover:text-gray-800 flex space-x-2 ">
                    <BiChevronsRight className="font-extrabold text-xl" />
                    Home Page
                  </a>
                </li>
                <li>
                  <a className=" text-md hover:text-gray-800 flex space-x-2 ">
                    <BiChevronsRight className="font-extrabold text-xl" /> Blog
                  </a>
                </li>
                <li>
                  <a className=" text-md hover:text-gray-800 flex space-x-2 ">
                    <BiChevronsRight className="font-extrabold text-xl" />{" "}
                    Services
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className="mt-0 justify-center md:items-center pb-5  md:mt-0  text-left">
            <div className=" px-2 ">
              <h3 className="font-bold  text-xl  mb-4 text-black text-center">
                Subscribe To Newsletter
              </h3>
              <form action="" className="flex justify-center">
                <div className=" ">
                  <input
                    type="email"
                    className="bg-white text-start border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 px-5 shadow-xl shadow-gray-300"
                    placeholder="Enter Your Email"
                  />
                </div>
                <button
                  type="button"
                  className="text-white bg-black hover:bg-black/70 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-0 text-center -ml-1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-black">
          <div className=" mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-600 text-md text-center sm:text-left px-4 tracking-wide">
              iBid Auctions Theme by Model Theme | Copyright © 2020
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-600 text-md tracking-wide">
              Elite Author on ThemeForest.
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
