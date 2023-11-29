// components/Cart.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface CartProps {
  itemCount: number;
}

const Cart: React.FC<CartProps> = ({ itemCount }) => {
  return (
    <div className="absolute top-10 right-10 p-4">
      {/* Cart icon */}
      <FontAwesomeIcon
        icon={faShoppingCart}
        size="lg"
        className="cursor-pointer"
      />
      {/* Notification badge */}
      {itemCount >= 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default Cart;
