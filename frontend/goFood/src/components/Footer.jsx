import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 h-36 w-full flex justify-between px-1 space-x-3 md:px-[20%] items-center ">
      <div className="flex space-x-3">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_960_720.png"
          alt="Logo"
          className="h-8 w-auto"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500">goFood</h1>
      </div>
      <ul className="ml-2 md:block">
        <li className="font-thin md:font-bold">Contact:</li>
        <li className="font-thin md:font-light">phone</li>
        <li className="font-thin md:font-light">+923065011190</li>
        <li className="font-thin md:font-light">email</li>
        <li className="font-thin md:font-light">abdurazaq.dev23@gmail.com</li>
      </ul>
    </div>
  );
};

export default Footer;
