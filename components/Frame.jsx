import React from "react";

const Frame = () => {
  return (
    <div>
      <section className="text-gray-200">
        <div className="px-10 py-24 lg:py-36 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 md:gap-1 2xl:gap-8 md:-m-2 -m-1">

            <div className="grid gap-6 md:gap-0 2xl:gap-20">
              <a href="/#frame">
                <div className="md:p-2 p-1 relative">
                  <div className="absolute">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block inset-0"
                      src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner2.jpg"
                    />
                  </div>
                  <div className="relative z-10 m-6 md:p-12 px-8 hover:border hover:border-gray-300 ease-in duration-700">
                    <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                      Assorted Boxes
                    </h2>
                    <p className="tracking-wider">20 Storages</p>
                    <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-14 text-sm uppercase duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </a>

              <a href="/#frame">
                <div className="md:p-2 p-1 w-full relative 2xl:pt-5">
                  <div className="absolute">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block inset-0"
                      src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner4.jpg"
                    />
                  </div>
                  <div className="relative z-10 m-6 md:p-12 px-8 hover:border hover:border-gray-300 ease-in duration-700">
                    <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                      HouseHold Goods
                    </h2>
                    <p className="tracking-wider">13 Storages</p>
                    <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-14 mb-28 text-sm uppercase duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid gap-20 md:gap-2">
              <a href="/#frame">
                <div className="md:p-2 p-1 w-full relative">
                  <div className="absolute">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block inset-0"
                      src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner1.jpg"
                    />
                  </div>
                  <div className="relative z-10 m-6 md:p-12 px-8 hover:border hover:border-gray-300 ease-in duration-700">
                    <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                      Sporting Goods
                    </h2>
                    <p className="tracking-wider">30 Storages</p>
                    <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-14 mb-28 text-sm uppercase duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </a>

              <a href="/#frame">
                <div className="md:p-2 p-1 relative">
                  <div className="absolute">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block inset-0"
                      src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner3.jpg"
                    />
                  </div>
                  <div className="relative z-10 m-6 md:p-12 px-8 hover:border hover:border-gray-300 ease-in duration-700">
                    <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                      Tools Workshop
                    </h2>
                    <p className="tracking-wider">11 Storages</p>
                    <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-14 text-sm uppercase duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
