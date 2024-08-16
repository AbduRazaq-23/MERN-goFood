import { IoCartOutline } from "react-icons/io5";

const Card = ({ food }) => {
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
          <IoCartOutline className="text-3xl text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Card;
