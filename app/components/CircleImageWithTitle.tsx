import React, { useState } from "react";
import ClothesDesign from "./ClothesDesign";

interface CircleImageWithTitleProps {
  title: string;
  image: string;
  onSelect?: () => void;
  selected?: boolean;
}

const CircleImageWithTitle: React.FC<CircleImageWithTitleProps> = ({
  title,
  image,
  onSelect,
  selected = false,
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleItemClick = () => {
    // Toggle the isSelected state
    setIsSelected(!isSelected);

    // Call the onSelect callback if provided
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <div>
      <div
        className={`flex items-center p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out transform${
          isHovered ? "bg-gray-200" : ""
        }${isSelected ? " bg-gray-200" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleItemClick}
      >
        <img
          className="w-12 h-12 object-cover rounded-full mr-2"
          src={image}
          alt={title}
        />
        <span className="text-center">{title}</span>
      </div>
      {/* {isSelected && (
        // Clothes Design (vertical)
        <div className="h-screen w-full justify-start bg-white relative overflow-hidden">
          <ClothesDesign />
        </div>
      )} */}
    </div>
  );
};

export default CircleImageWithTitle;
