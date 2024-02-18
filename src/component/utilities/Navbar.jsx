// import React from 'react';
// import { Link } from 'react-router-dom';

// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-8 flex items-center justify-between">
      {/* Left Section - Links */}
      <div className="flex items-center space-x-9 text-2xl">
        {/* <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/services" className="text-white">Services</Link> */}
        {/* <Link to="/">home</Link> */}
        <a href="#" className="text-white"> التواصل </a>
        <a href="#" className="text-white "> الصفحات </a>
        <a href="#" className="text-white"> الرئيسية </a>
      </div>

      {/* Center Section - Logo */}
      <div className="flex items-center">
        <div className="rounded-full bg-gray-300 "> 
            {/* <img src="/images/logo.png" alt="Logo" className="w-40 " /> */}
        </div>
        
      </div>

      {/* Right Section - Text */}
      <div className="text-white text-center ">
        <p className=" m-3 text-3xl"> مؤســسة خيـــــــــــــري التعليميمة </p>
        <p className="text-2xl "> حضانة - ابتدائي - إعدادي - ثانوي (عام وأزهري) </p>
      </div>
    </nav>
  );
};

export default Navbar;
