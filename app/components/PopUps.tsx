import React, { useState } from "react";
import OrderButton from "./OrderButton";
import ClothesTypes from "./ClothesTypes";
import ClothesDesign from "./ClothesDesign";
import ClothesDesignItem from "./ClothesDesignItem";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface TestProps {
  onAddToCart: (selectedItem: ClothesDesignItemProps | null) => void;
}

interface ClothesDesignItemProps {
  title: string;
  image: string;
}

const Test: React.FC<TestProps> = ({ onAddToCart }) => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<ClothesDesignItemProps | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectItem = (item: ClothesDesignItemProps) => {
    setSelectedItem(item);
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      setSelectedItems((prevItems) => [...prevItems, selectedItem.title]);
    }
  };

  return (
    <div className="font-sans flex items-center justify-center h-screen relative">
      <div>
        {/* Button to open the privacy policy modal  */}
        <OrderButton onClick={() => setShowPrivacyPolicy(true)} />

        {/* Privacy Policy Modal  */}
        {showPrivacyPolicy && (
          <div className="fixed z-10 inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4"
              style={{
                transition:
                  "ease-out duration-300 transform opacity-0 scale-95",
              }}
            >
              {/* Modal panel */}
              <div className="flex justify-between px-6 py-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  New order
                </h3>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    onClick={() => setShowPrivacyPolicy(false)}
                    icon={faClose}
                    size="lg"
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div
                className="prose max-w-screen-md p-6 overflow-y-auto"
                style={{
                  maxHeight: "70vh",
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.375rem",
                  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Privacy Policy content */}
                <p className="mb-4">Select Design and Styles</p>

                {/* Clothes Types (horizontal) */}
                <ClothesTypes />

                {/* Clothes Design (vertical) */}
                <div className="h-screen w-full bg-white relative flex overflow-hidden">
                  <ClothesDesign />
                  <ClothesDesignItem />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-start p-4 gap-4 flex-row">
                <button
                  onClick={() => {
                    onAddToCart(selectedItem);
                  }}
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
