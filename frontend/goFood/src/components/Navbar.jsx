import { Link } from "react-router-dom"; // If you're using React Router
import axios from "axios";

const Navbar = () => {
  const logOut = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:8000/api/v1/users/logout"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
            <Link to="/register" className="text-white hover:text-gray-400">
              MyOrder
            </Link>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="flex space-x-4">
        <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            SignIn
          </Link>
        </div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <Link
            to="/register"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            SignUp
          </Link>
        </div>

        <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <button
            onClick={() => logOut()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            logOut
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
