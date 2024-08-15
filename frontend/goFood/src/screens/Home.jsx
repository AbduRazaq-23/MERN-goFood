import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [food, setFood] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/foods/getfood"
        );

        setFood(response.data.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />

      {food ? (
        food.map((item) => <Card key={item._id} food={item} />)
      ) : (
        <li>No food items available.</li>
      )}
    </div>
  );
};

export default Home;
