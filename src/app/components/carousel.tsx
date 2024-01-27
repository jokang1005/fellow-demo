"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Product from "./product";
import "../globals.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface IProps {
  id: number;
  name: string;
  image_path: string;
  cost: string;
  colors: string[];
}

export default function Carousel({ data }: { data?: IProps[] }) {
  const [cart, setCart] = useState<
    { id: number; name: string; cost: string; quantity: number }[]
  >([]);

  const handleAddToCart = (id: number, name: string, cost: string) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart((prevData) => {
        return prevData.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      });
    } else {
      setCart((prevData) => [...prevData, { id, name, cost, quantity: 1 }]);
    }
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="mySwiper h-100vh md:h-80vh"
      >
        <SwiperSlide>
          <div className="absolute inset-0 flex bg-fellow-blue z-0"></div>
          <div className="container flex flex-col md:flex-row justify-between items-center relative z-10">
            <div className="md:w-3/5 w-full text-center mb-8 md:mb-0">
              <img src="/fellow1.png" alt="" />
            </div>
            <div className="md:w-2/5 lg:text-left text-center lg:px-16">
              <p className="text-black md:text-5xl text-2xl py-8 bold-text">
                Home is where the kettle is
              </p>
              <p className="text-black md:text-xl text-md flex-wrap">
                FOMO, schomo. Stay in and brew coffee. Your cozy countertop era
                awaits.
              </p>
              <button className="bg-black text-white hover:bg-white border-2 hover:border-black hover:text-black my-8 px-16 py-4 rounded-2xl">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute inset-0 flex bg-fellow-yellow z-0"></div>
          <div className="container flex flex-col md:flex-row justify-between items-center relative z-10">
            <div className="md:w-3/5 w-full text-center mb-8 md:mb-0">
              <img src="/fellow2.png" alt="" />
            </div>
            <div className="md:w-2/5 lg:text-left text-center lg:px-16">
              <p className="text-white md:text-5xl text-2xl py-8 bold-text">
                Kit Kit Hooray!
              </p>
              <p className="text-white md:text-xl text-md flex-wrap">
                Save up to 20% on our best-selling bundles and kits.
              </p>
              <button className="bg-white text-black hover:bg-fellow-yellow border-2 hover:border-white hover:text-white my-8 px-16 py-4 rounded-2xl">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="text-black md:text-5xl text-2xl py-8 bold-text">
        Brewing gifts for every state of the year
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="bg-fellow-grey w-full m-2 h-100vh md:h-60vh"
      >
        {data.map((data) => {
          return (
            <SwiperSlide className="flex flex-col bg-gradient-to-r from-fellow-grey to-white p-8">
              <div>
                <img src={data.image_path} alt="" />
              </div>
              <div className="w-full">
                <p className="text-black md:text-xl text-md flex-wrap">
                  {data.name}
                </p>
                <p className="text-lg">{data.cost}</p>
              </div>
              <Product id={data.id} name={data.name} cost={data.cost} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
