import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = () => {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    setCookieValue(token);
  }, []);

  const logOut = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:8000/api/v1/users/logout",
        {},
        { withCredentials: true }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className=" bg-gray-800 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_960_720.png"
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Menu */}
      {cookieValue ? (
        <p className="text-white hover:text-gray-400">
          <Link to="/register" className="text-white hover:text-gray-400">
            MyOrder
          </Link>
        </p>
      ) : (
        ""
      )}

      {/*  Button */}
      <div className="flex space-x-4">
        {cookieValue ? (
          <button
            onClick={() => logOut()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
