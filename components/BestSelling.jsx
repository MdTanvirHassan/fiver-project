import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import slider from "../public/assets/banner.jpg";
//import slider2 from "../public/assets/banner.jpg";
// import slider3 from "../public/assets/banner.jpg";
// import slider4 from "../public/assets/banner.jpg";
// import slider5 from "../public/assets/banner.jpg";
const BestSelling = () => {
  return (
    <div id="BestSelling" className="">
            <div className=" py-8  mx-auto">
                <div className=" mb-5">
                    <h2 className="text-3xl">
                        Best Selling
                    </h2>
                </div>
                <Swiper
                    breakpoints={{
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div class="w-full max-w-sm bg-white ">
                            <div className="">
                                <Image
                                    src={slider}
                                    alt=".."
                                    className=" rounded-2xl  w-full h-full p-5 pb-2"
                                />
                                <button type="button" class=" text-lg font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-red-400 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200  px-16  py-2 capitalize bottom-4 left-1/2 -translate-x-1/2
                              ">Add to wishlist</button>

                            </div>
                            <div class="px-5">
                                <h2 className="text-3xl uppercase font-bold ">
                                    Brand
                                </h2>
                                <p className="text-lg">A Short Line About The Cloth..</p>
                                <p className="text-xl font-bold">$20</p>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <a className="relative block w-full group"
                                href="##">
                                <Image
                                    src={slider}
                                    alt=".."
                                    className=" rounded-2xl absolute block w-full h-full mt-5"
                                />
                                <div className="relative p-5 md:m-auto md:px-auto lg:m-auto ">
                                    <div className="mt-40">
                                        <div className="transition-all transform  translate-y-8 opacity-0  group-hover:opacity-100  group-hover:translate-y-0 ">
                                            <div className="p-2 justify-center items-center text-center">
                                                <button className="px-10 md:px-5 lg:px-10  py-2 text-sm  bg-white  border border-gray-200 hover:bg-red-400 hover:text-white ">
                                                    Add to wishlist
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      </SwiperSlide>
                    <SwiperSlide><Image
                        src={slider}
                        alt=".."
                        className=" rounded-2xl  w-full h-full mt-5"
                    /></SwiperSlide>
                    <SwiperSlide><Image
                        src={slider}
                        alt=".."
                        className=" rounded-2xl  w-full h-full mt-5"
                    /></SwiperSlide>
                    <SwiperSlide><Image
                        src={slider}
                        alt=".."
                        className=" rounded-2xl  w-full h-full mt-5"
                    /></SwiperSlide>
                    <SwiperSlide><Image
                        src={slider}
                        alt=".."
                        className=" rounded-2xl  w-full h-full mt-5"
                    /></SwiperSlide>
                    <SwiperSlide><Image
                        src={slider}
                        alt=".."
                        className=" rounded-2xl  w-full h-full mt-5"
                    /></SwiperSlide>

                </Swiper>
            </div>

        </div>
  );
};

export default BestSelling;
