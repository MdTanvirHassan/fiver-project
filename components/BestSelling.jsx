import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import slider from "../public/assets/card7.jpg";
import slider2 from "../public/assets/card8.jpg";
import slider3 from "../public/assets/card9.jpg";
import slider4 from "../public/assets/card10.jpg";

const BestSelling = () => {
  return (
    <div id="BestSelling" className="m-0 p-0">
      <div className="py-8 pt-24 mx-5">
        <div className="mb-5">
          <h2 className="text-3xl text-center">Best Selling</h2>
        </div>
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          centeredSlides={false}
          spaceBetween={50}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">

          <SwiperSlide>
            <div className="relative flex items-center justify-center h-auto w-full rounded-md">
              <a className=" group " href="/#product">
                <Image
                  src={slider}
                  alt=".."
                  strategy="lazyOnload"
                  className="w-full h-full mt-5 group-hover:opacity-100 "
                />
                <div className="uppercase p-2">
                  <h3 className="text-xl tracking-wider font-extrabold">
                    Brand
                  </h3>
                  <p className="text-sm text-gray-500">
                    A Short Line About The Cloth..
                  </p>
                  <h3 className="text-xl tracking-wider font-extrabold">$20</h3>
                </div>
                <div className="hidden group-hover:block absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                  <div className=" justify-center items-center text-center w-full">
                    <button className="px-16  py-2 rounded-md text-sm  bg-white  border border-gray-200 hover:bg-red-400 hover:text-white ">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex items-center justify-center h-auto w-full rounded-md">
              <a className=" group group-hover:bg-none " href="/#product">
                <Image
                  src={slider2}
                  alt=".."
                  strategy="lazyOnload"
                  className="w-full h-full mt-5 group-hover:opacity-100 "
                />
                <div className="uppercase p-2">
                  <h3 className="text-xl tracking-wider font-extrabold">
                    Brand
                  </h3>
                  <p className="text-sm text-gray-500">
                    A Short Line About The Cloth..
                  </p>
                  <h3 className="text-xl tracking-wider font-extrabold">$20</h3>
                </div>
                <div className="hidden group-hover:block absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                  <div className=" justify-center items-center text-center w-full">
                    <button className="px-16  py-2 rounded-md text-sm  bg-white  border border-gray-200 hover:bg-red-400 hover:text-white ">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex items-center justify-center h-auto w-full rounded-md">
              <a className=" group group-hover:bg-none " href="/#product">
                <Image
                  src={slider3}
                  alt=".."
                  strategy="lazyOnload"
                  className="w-full h-full mt-5 group-hover:opacity-100 "
                />
                <div className="uppercase p-2">
                  <h3 className="text-xl tracking-wider font-extrabold">
                    Brand
                  </h3>
                  <p className="text-sm text-gray-500">
                    A Short Line About The Cloth..
                  </p>
                  <h3 className="text-xl tracking-wider font-extrabold">$20</h3>
                </div>
                <div className="hidden group-hover:block absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                  <div className=" justify-center items-center text-center w-full">
                    <button className="px-16  py-2 rounded-md text-sm  bg-white  border border-gray-200 hover:bg-red-400 hover:text-white ">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex items-center justify-center h-auto w-full rounded-md">
              <a className=" group group-hover:bg-none " href="/#product">
                <Image
                  src={slider4}
                  alt=".."
                  strategy="lazyOnload"
                  className="w-full h-full mt-5 group-hover:opacity-100 "
                />
                <div className="uppercase p-2">
                  <h3 className="text-xl tracking-wider font-extrabold">
                    Brand
                  </h3>
                  <p className="text-sm text-gray-500">
                    A Short Line About The Cloth..
                  </p>
                  <h3 className="text-xl tracking-wider font-extrabold">$20</h3>
                </div>
                <div className="hidden group-hover:block absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                  <div className=" justify-center items-center text-center w-full">
                    <button className="px-16  py-2 rounded-md text-sm  bg-white  border border-gray-200 hover:bg-red-400 hover:text-white ">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex items-center justify-center h-auto w-full rounded-md">
              <a className=" group group-hover:bg-none " href="/#product">
                <Image
                  src={slider2}
                  alt=".."
                  strategy="lazyOnload"
                  className="w-full h-full mt-5 group-hover:opacity-100 "
                />
                <div className="uppercase p-2">
                  <h3 className="text-xl tracking-wider font-extrabold">
                    Brand
                  </h3>
                  <p className="text-sm text-gray-500">
                    A Short Line About The Cloth..
                  </p>
                  <h3 className="text-xl tracking-wider font-extrabold">$20</h3>
                </div>
                <div className="hidden group-hover:block absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                  <div className=" justify-center items-center text-center w-full">
                    <button className="px-16  py-2 rounded-md text-sm  bg-white  border border-gray-200 hover:bg-red-400 hover:text-white ">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex items-center justify-center h-auto w-full rounded-md">
              <a className=" group group-hover:bg-none " href="/#product">
                <Image
                  src={slider3}
                  alt=".."
                  strategy="lazyOnload"
                  className="w-full h-full mt-5 group-hover:opacity-100 "
                />
                <div className="uppercase p-2">
                  <h3 className="text-xl tracking-wider font-extrabold">
                    Brand
                  </h3>
                  <p className="text-sm text-gray-500">
                    A Short Line About The Cloth..
                  </p>
                  <h3 className="text-xl tracking-wider font-extrabold">$20</h3>
                </div>
                <div className="hidden group-hover:block absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
                  <div className=" justify-center items-center text-center w-full">
                    <button className="px-16  py-2 rounded-md text-sm  bg-white  border border-gray-200 hover:bg-red-400 hover:text-white ">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
