import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/AdminCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [allUser, setAllUser] = useState();
  const [allFood, setAllFood] = useState();
  const [appetizerFood, setAppetizerFood] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, foodDessert, foodAppetizer] = await Promise.all([
          axios.get("http://localhost:8000/api/v1/users/getalluser", {
            withCredentials: true,
          }),

          axios.get("http://localhost:8000/api/v1/foods/getbycategorydessert"),
          axios.get(
            "http://localhost:8000/api/v1/foods/getbycategoryappetizer"
          ),
        ]);

        setAllUser(users.data.data);
        setAllFood(foodDessert.data.data);
        setAppetizerFood(foodAppetizer.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-700">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto p-4 mt-5">
        <div className="flex justify-between items-center bg-gray-600 p-4 rounded-md shadow-sm mb-6">
          <h2 className="text-xl font-semibold text-gray-200">Dashboard</h2>
          <Link to={"/"}>
            <button className="bg-gray-700 text-gray-200 rounded-xl px-4 py-2 hover:bg-gray-800">
              home
            </button>
          </Link>
          <Link to={"/addfood"}>
            <button className="bg-gray-700 text-gray-200 rounded-xl px-4 py-2 hover:bg-gray-800">
              Add Food
            </button>
          </Link>
        </div>
        {/* @dec getalluser */}
        <div className="bg-gray-600  p-4 rounded-md shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            All Users
          </h3>
          <div className="text-gray-300">
            {!allUser ? (
              <p>loading</p>
            ) : (
              allUser.map((user) => (
                <div className="m-2 flex justify-between" key={user._id}>
                  <div>
                    <p>Name : {user.userName}</p>
                    <p>Email : {user.email}</p>
                  </div>
                  <button className="bg-gray-700 h-8 px-2 rounded-lg hover:bg-red-500 hover:text-gray-800">
                    delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        {/* @dec getDessertFood */}
        <div className="bg-gray-600  p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            All Food Products
          </h3>
          <h1 className="text-3xl font-bold text-center text-gray-200 mb-2">
            Dessert
          </h1>
          <div className="w-20 bg-slate-700 h-1 mx-auto rounded-md hover:bg-slate-900"></div>
          <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {!allFood ? (
              <p>loading</p>
            ) : (
              allFood.map((food) => (
                <div key={food._id}>
                  <Card food={food} />
                </div>
              ))
            )}
          </div>
        </div>
        {/* @dec getAppetizerFood */}
        <div className="bg-gray-600  p-4 rounded-md shadow-sm mt-3">
          <h1 className="text-3xl font-bold text-center text-gray-200 mb-2">
            Appetizer
          </h1>
          <div className="w-24 bg-slate-700 h-1 mx-auto rounded-md hover:bg-slate-900"></div>
          <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {!appetizerFood ? (
              <p>loading</p>
            ) : (
              appetizerFood.map((food) => (
                <div className="m-2 " key={food._id}>
                  <Card food={food} />
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
