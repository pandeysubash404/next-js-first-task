"use client";

import React, { useState } from "react";
import Cart from "../app/components/Cart";
import OrderButton from "../app/components/OrderButton";
import Test from "./components/PopUps";

const Home: React.FC = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Test onAddToCart={addToCart} />
      <Cart itemCount={cartItemCount} />
    </div>
  );
};

export default Home;
