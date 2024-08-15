import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Dessert from "../components/Dessert";
import Appetizer from "../components/appetizer";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Dessert />
      <Appetizer />
      <Footer />
    </div>
  );
};

export default Home;
