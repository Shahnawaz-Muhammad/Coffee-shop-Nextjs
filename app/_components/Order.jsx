import Image from "next/image";
import React from "react";

const Order = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto p-6 lg:px-8 ">
          <div className="banner-container py-20">
            <div className="grid grid-cols-2">
              <div>
                <Image src="/images/coffee-mid.png" width={550} height={500} />
              </div>

              <div className="flex flex-col gap-10">
                <div className="relative">
                  <h1 className="text-7xl font-bold flex ">
                    Order Your Favourite Coffee
                  </h1>
                </div>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque excepturi aliquid esse enim, eaque atque vitae
                  consequatur reprehenderit perspiciatis quaerat optio! Dolorem
                  sapiente corrupti aspernatur? Tenetur corrupti magnam odit
                  quae!
                </p>
                <div className="flex gap-5">
                  <button className="bg-black text-white py-2 px-5 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
