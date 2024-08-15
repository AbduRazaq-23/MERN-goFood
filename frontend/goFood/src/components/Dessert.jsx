import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Dessert = () => {
  const [food, setFood] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/foods/getbycategorydessert"
        );

        setFood(response.data.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    })();
  }, []);

  return (
    <div className="w-full h-auto">
      <h1 className="text-3xl mt-6 font-bold text-center">Dessert</h1>
      <div className="w-20 bg-blue-600 h-1 mx-auto rounded-md hover:bg-slate-900"></div>
      <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food ? (
          food.map((item) => <Card key={item._id} food={item} />)
        ) : (
          <li>No food items available.</li>
        )}
      </div>
    </div>
  );
};

export default Dessert;
