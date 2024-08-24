import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <div className="relative">
      <Image src="/images/alowishus-coffee1.png" width={300} height={200} className="drop-shadow-2xl scale-x-[-1] absolute -left-28 top-[10%]"/>
      <div className="max-w-7xl mx-auto py-20 ">
        <div className="max-w-4xl mx-auto text-center py-10">
          <h1 className="text-3xl font-semibold">Explore our Alovishus</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, unde temporibus. Corrupti, vel cupiditate expedita
            commodi magni voluptates cum in.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20 w-4/5 mx-auto">
          <div className="bg-white shadow-lg shadow-gray-400 px-5 py-7 flex flex-col gap-5">
            <h1 className="text-2xl">Our Catering</h1>
            <p>Alushius catering, delicious drop off catering</p>
            <div className="flex flex-col items-center gap-5">
              <Image src="/images/icon1.png" width={200} height={200} />
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                Order catering
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-gray-400 px-5 py-7 flex flex-col gap-5">
            <h1 className="text-2xl">The Food</h1>
            <p>Alushius catering, delicious drop off catering</p>
            <div className="flex flex-col items-center gap-5">
              <Image src="/images/icon2.png" width={200} height={200} />
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                Order catering
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-gray-400 px-5 py-7 flex flex-col gap-5">
            <h1 className="text-2xl">The Gelato</h1>
            <p>Alushius catering, delicious drop off catering</p>
            <div className="flex flex-col items-center gap-5">
              <Image src="/images/icon3.png" width={200} height={200} />
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                Order catering
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
