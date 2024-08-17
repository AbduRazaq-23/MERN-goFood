import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Dashboard = () => {
  const [allUser, setAllUser] = useState();
  const [allFood, setAllFood] = useState();
  const [appetizerFood, setAppetizerFood] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get(
          "http://localhost:8000/api/v1/users/getalluser"
        );
        const foodDessert = await axios.get(
          "http://localhost:8000/api/v1/foods/getbycategorydessert"
        );
        const foodAppetizer = await axios.get(
          "http://localhost:8000/api/v1/foods/getbycategoryappetizer"
        );
        setAllUser(users.data.data);
        setAllFood(foodDessert.data.data);
        setAppetizerFood(foodAppetizer.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-700">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto p-4 mt-5">
        <div className="flex justify-between items-center bg-gray-600 p-4 rounded-md shadow-sm mb-6">
          <h2 className="text-xl font-semibold text-gray-200">Dashboard</h2>
          <button className="bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700">
            Add Food
          </button>
        </div>

        <div className="bg-gray-600  p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            All Users
          </h3>
          <div className="text-gray-300">
            {!allUser ? (
              <p>loading</p>
            ) : (
              allUser.map((user) => (
                <div className="m-2" key={user._id}>
                  <p>{user.userName}</p>
                  <p>{user.email}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-gray-600  p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            All Food Products
          </h3>
          <h1 className="text-lg font-semibold text-gray-200 mb-2">Dessert</h1>
          <div className="text-gray-300">
            {!allFood ? (
              <p>loading</p>
            ) : (
              allFood.map((food) => (
                <div className="m-2" key={food._id}>
                  <p>{food.foodName}</p>
                  <p>{food.category}</p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="bg-gray-600  p-4 rounded-md shadow-sm">
          <h1 className="text-lg font-semibold text-gray-200 mb-2">
            Appetizer
          </h1>
          <div className="text-gray-300">
            {!appetizerFood ? (
              <p>loading</p>
            ) : (
              appetizerFood.map((food) => (
                <div className="m-2 " key={food._id}>
                  <p>{food.foodName}</p>
                  <p>{food.category}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
