import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = () => {
  const [cookieValue, setCookieValue] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const token = Cookies.get("token");
    setCookieValue(token);

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/users/getuser",
          { withCredentials: true }
        );
        // Log the response data
        setUser(res.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
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
          <Link to="/" className="text-white hover:text-gray-400">
            MyOrder
          </Link>
        </p>
      ) : (
        ""
      )}

      {/*  Button */}
      <div className="flex space-x-4">
        {cookieValue ? (
          <div className="flex space-x-3 items-center">
            <p>addToCart</p>
            <button
              onClick={() => logOut()}
              className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-100 hover:text-blue-500"
            >
              Log Out
            </button>
            <p>{!user ? <span>Loading...</span> : user.userName}</p>
          </div>
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
