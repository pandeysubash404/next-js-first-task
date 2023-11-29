import React from "react";

interface OrderButtonProps {
  onClick: () => void;
}

const OrderButton: React.FC<OrderButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Order Now
    </button>
  );
};

export default OrderButton;
