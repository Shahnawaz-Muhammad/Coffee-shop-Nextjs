"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
const Banner = () => {
  return (
    <>
      <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-6 lg:px-8 ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          //   spaceBetween={38}
          centeredSlides={true}
          modules={[Pagination]}
          autoplay
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner-container py-10">
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-10">
                  <div className="relative">
                    <h1 className="text-7xl font-bold flex ">
                      Alowishus Delicious <br />
                      Coffee.
                      <Image
                        src="/images/cafe.png"
                        width={100}
                        height={100}
                        alt=""
                        className="absolute right-[30%] bottom-0"
                      />
                    </h1>
                  </div>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque excepturi aliquid esse enim, eaque atque vitae
                    consequatur reprehenderit perspiciatis quaerat optio!
                    Dolorem sapiente corrupti aspernatur? Tenetur corrupti
                    magnam odit quae!
                  </p>
                  <div className="flex gap-5">
                    <button className="bg-black text-white py-2 px-5 ">
                      Buy Now
                    </button>
                    <button className="bg-gray-300 py-2 px-5 shadow-xl shadow-gray-500">
                      Download App
                    </button>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/hero1.png"
                    width={500}
                    height={500}
                    className="drop-shadow-xl shadow-black	"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-container py-10">
              <div className="grid grid-cols-2">
                <div>
                  <Image src="/images/man-holding.png" width={350} height={350} />
                </div>

                <div className="flex flex-col gap-10">
                  <div className="relative">
                    <h1 className="text-7xl font-bold flex ">
                      Alowishus Delicious <br />
                      Coffee.
                      <Image
                        src="/images/cafe.png"
                        width={100}
                        height={100}
                        alt=""
                        className="absolute right-[30%] bottom-0"
                      />
                    </h1>
                  </div>

                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque excepturi aliquid esse enim, eaque atque vitae
                    consequatur reprehenderit perspiciatis quaerat optio!
                    Dolorem sapiente corrupti aspernatur? Tenetur corrupti
                    magnam odit quae!
                  </p>
                  <div className="flex gap-5">
                    <button className="bg-black text-white py-2 px-5 ">
                      Buy Now
                    </button>
                    <button className="bg-gray-300 py-2 px-5 shadow-xl shadow-gray-500">
                      Download App
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
    </>
  );
};

export default Banner;
