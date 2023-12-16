import React from "react";
import Mobile from "../assets/images/mobile_side-removebg-preview.png";

const MobileDevelopement = () => {
  return (
    <div className="w-full  bg-white  py-24 ">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img alt="right" src={Mobile} className="w-[650px] mx-auto" />
        <div  >
          <h1 className="py-2  text-3xl font-semibold text-[#6B3CC9]">
            Web & Mobile App Development{" "}
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="max-[780px]:w-full rtl-mobile-button text-white mt-2">
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopement;
