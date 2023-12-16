import React, { useState } from "react";
import {  hamburgerMenu, close } from "../assets";
import ATlogo from "../assets/svg/ATLogo.svg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b bg-primary px-5 ">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={ATlogo} className="h-[25px]" alt="logo"/>
        <div className="hidden md:flex">
          <ul className="flex gap-4 text-white">
            <li  className="px-4" >SERVICES</li>
            <li  className="px-4" >ABOUT US</li>
            <li  className="px-4" >CONTACT US</li>
            <li  className="px-4" >CAREERS</li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} alt="hamburger" />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CAREERS</li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
