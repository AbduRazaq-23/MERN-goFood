import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ food }) => {
  const handleDelete = async (foodId) => {
    await axios.delete(
      `http://localhost:8000/api/v1/foods/deletefood/${foodId}`,
      {
        withCredentials: true,
      }
    );
  };

  return (
    <div className="bg-white m-1 rounded-lg shadow-lg overflow-hidden">
      <img
        src={food.picture}
        alt={food.foodName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {food.foodName}
        </h2>
        <p className="text-gray-600 mt-1">{food.description}</p>
        <p className="mt-2 text-sm text-gray-500">Category: {food.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${food.price}</span>
          <Link to={`/foodupdate/${food._id}`}>
            <button className="text-gray-900 border px-2 py-1 rounded-lg hover:text-white hover:bg-gray-600">
              update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(food._id)}
            className="text-gray-900 border px-2 py-1 rounded-lg hover:text-white hover:bg-red-500"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
