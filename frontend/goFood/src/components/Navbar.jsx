import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Navbar = () => {
  return (
    <nav className=" bg-gray-800 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="" // Replace with your logo path
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Menu */}
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-400">
            {/* <Link to="/" className="text-white hover:text-gray-400"> */}
            Home
            {/* </Link> */}
          </li>
          <li className="text-white hover:text-gray-400">
            {/* <Link to="/about" className="text-white hover:text-gray-400"> */}
            MyOrder
            {/* </Link> */}
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {/* <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        > */}
        Login
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
