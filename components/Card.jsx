import Image from "next/image";
import React from "react";
import box from "../public/assets/Storage-prod9-300x300.jpg";
import box2 from "../public/assets/Storage-prod8-300x300.jpg";
import box3 from "../public/assets/Storage-prod7-300x300.jpg";
import box4 from "../public/assets/Storage-prod6-300x300.jpg";
import box5 from "../public/assets/Storage-prod12-300x300.jpg";
import box6 from "../public/assets/Storage-prod11-300x300.jpg";
import box7 from "../public/assets/Storage-prod13-300x300.jpg";
import box8 from "../public/assets/Storage-prod10-300x300.jpg";
import { AiFillPrinter, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";

const Card = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 mx-4 py-5 2xl:mt-32">
        {/* span-1 */}

        <div className="mx-1 w-full relative">
          <div className="absolute w-full h-[100%]">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block inset-0"
              src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-Category2.jpg"
            />
          </div>
          <div className="relative z-10   top-[25%] text-center mx-auto ">
            <h2 className="text-xl md:text-3xl font-bold text-white uppercase relative">
              HouseHold
            </h2>
            <p className="tracking-wider text-gray-300">13 Storages</p>
            <button className="bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black mx-auto px-5 py-2 md:mt-14 mt-6 mb-14 md:mb-28 text-sm uppercase duration-300">
              View All Items
            </button>
          </div>
        </div>
        {/* span-2 */}
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-10">
          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box2} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* span-3 */}
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-10">
          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box3} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box4} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*//todo ------card2--------- */}


      <div className="grid md:grid-cols-3 gap-10 mx-4 py-10">
        {/* span-1 */}

        <div className="mx-1 w-full relative">
          <div className="absolute w-full h-[100%]">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block inset-0"
              src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-Category1.jpg)"
            />
          </div>
          <div className="relative z-10   top-[25%] text-center mx-auto ">
            <h2 className="text-xl md:text-3xl font-bold text-white uppercase relative">
              Boxes
            </h2>
            <p className="tracking-wider text-gray-300">17 Storages</p>
            <button className="bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black mx-auto px-5 py-2 md:mt-14 mt-6 mb-14 md:mb-28 text-sm uppercase duration-300">
              View All Items
            </button>
          </div>
        </div>
        {/* span-2 */}
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-10">
          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box5} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box6} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* span-3 */}
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-10">
          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box7} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg  p-2 w-full md:flex mx-2">
            <div className="w-full mx-auto">
              <Image src={box8} width={150} height={150} alt=".." className="hover:scale-105"/>
            </div>
            <div className="w-full text-sm pt-2">
              <p className="text-lg font-bold">
                LockBox Storage Midtown LockBox Storage Midtown
              </p>
              <h3>$89.00</h3>
              <div className="flex space-x-3 pt-1 px-2">
                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300  bg-black">
                  <a href="/#icon" className="">
                    <AiFillPrinter className="text-2xl text-white" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineHeart className="text-2xl" />
                  </a>
                </span>

                <span className="p-2 rounded-md shadow-md  hover:bg-gray-300 ">
                  <a href="/#icon" className="">
                    <AiOutlineSearch className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
