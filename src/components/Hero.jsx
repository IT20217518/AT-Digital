import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24 bg-cover hero-section ">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4 bg-white hero-gradian">
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <div className="hero-button-div"> LEARN MORE</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
