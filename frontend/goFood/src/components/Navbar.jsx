import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [cookieValue, setCookieValue] = useState("");
  const [user, setUser] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setCookieValue(token);

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/users/getuser",
          { withCredentials: true }
        );
        setUser(res.data.data);
      } catch (error) {
        console.error("Error fetching user data:");
      }
    };

    fetchUser();
  }, []);

  const logOut = async () => {
    try {
      await axios.patch(
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
    <>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_960_720.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </button>

        {/* Menu Items */}
        <div className="hidden md:block ">
          <div className="flex items-center space-x-3 ">
            {cookieValue ? (
              <>
                <p className="text-white hover:text-gray-400">
                  <Link to="/">MyOrder</Link>
                </p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => logOut()}
                    className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-100 hover:text-blue-500"
                  >
                    LogOut
                  </button>
                  <p>{!user ? <span>Loading...</span> : user.userName}</p>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-100 hover:text-blue-500">
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-100 hover:text-blue-500">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* small screen  */}
      <div className={` ${isMenuOpen ? "block" : "hidden"}`}>
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-100 z-40 transform transition-transform duration-300 ease-in-out lg:relative lg:flex lg:items-center lg:space-x-4 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="md:hidden ">
            <div className="p-5  items-center space-y-4 ">
              {cookieValue ? (
                <>
                  <p>{!user ? <span>Loading...</span> : user.userName}</p>
                  <p className="text-white hover:text-gray-400 pt-10">
                    <Link to="/">MyOrder</Link>
                  </p>
                  <div className=" items-center space-y-4">
                    <button
                      onClick={() => logOut()}
                      className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-100 hover:text-blue-500"
                    >
                      Log Out
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex space-x-5">
                  <Link to="/login">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-100 hover:text-blue-500">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-blue-100 hover:text-blue-500">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
