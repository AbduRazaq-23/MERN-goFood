import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const AddFormForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    foodName: "",
    description: "",
    category: "",
    picture: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/v1/foods/postfood",
      formData
    );

    console.log(response.data);

    setFormData("");
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center">
      <div className="w-full md:w-[30%] mx-auto   p-8 my-auto bg-white shadow-md rounded-md">
        <Link to={"/dashboard"}>
          <IoArrowBack className="text-gray-800 mb-3" />
        </Link>
        <h2 className="text-2xl text-gray-700 text-center font-bold mb-4">
          Add Food
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="foodName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              placeholder="Enter Name"
              value={formData.foodName}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none bg-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none bg-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">-- Choose Category --</option>
              <option value="appetizer">appetizer</option>
              <option value="dessert">dessert</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="picture"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Picture
            </label>
            <input
              type="text"
              id="picture"
              name="picture"
              placeholder="Enter picture"
              value={formData.picture}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none bg-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none bg-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFormForm;
