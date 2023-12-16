import React from "react";
import Digital from "../assets/images/digital_search-removebg-preview.png";
const Degital = () => {
  return (
    <div className="w-full bg-white py-24 px-5">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="m-auto ">
          <h1 className="py-2  text-3xl font-semibold text-[#6B3CC9]">
            Digital Strategy Consulting
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="max-[780px]:w-full rtl-mobile-button text-white mt-2">
           LEARN MORE
          </button>
        </div>

        <img src={Digital} className="m-auto md:order-last  order-first" alt="side"/>
      </div>
    </div>
  );
};

export default Degital;
