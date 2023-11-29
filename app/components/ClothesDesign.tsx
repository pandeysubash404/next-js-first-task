import React, { useState } from "react";
import ClothesDesignItems from "./ClothesDesignItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface ClothesDesignItemProps {
  title: string;
  image: string;
  onSelect?: () => void;
  selected?: boolean;
}

const ClothesDesignItem: React.FC<ClothesDesignItemProps> = ({
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
    <>
      <div className="m-5 justify-start">
        <div
          className={`w-16 h-16 overflow-hidden p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out transform ${
            isHovered ? "bg-gray-200" : ""
          }${isSelected ? " bg-gray-200" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleItemClick}
        >
          <img className="w-full h-full object-cover" src={image} alt={title} />
          {isSelected && (
            <div className="absolute bottom-0 right-0 fill-green-500">
              <FontAwesomeIcon icon={faCheck} size="sm" color="green" />
            </div>
          )}
        </div>
        <div className="mt-2 text-xs">
          <p className="whitespace-normal">{title}</p>
        </div>
      </div>
      {/* {isSelected && <ClothesDesignItems />} */}
    </>
  );
};

const ClothesDesign: React.FC = () => {
  // Dummy data for subcategories
  const subcategories = [
    {
      title: "COLLAR",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      title: "BUTTON",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      title: "POCKET",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      title: "SEAMS",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      title: "VENTS",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectItem = (title: string) => {
    setSelectedItem(title);
  };

  return (
    <div className="h-full w-16 flex flex-col items-center text-center relative">
      {subcategories.map((subcategory) => (
        <ClothesDesignItem
          key={subcategory.title}
          title={subcategory.title}
          image={subcategory.image}
          onSelect={() => handleSelectItem(subcategory.title)}
          selected={selectedItem === subcategory.title}
        />
      ))}
    </div>
  );
};

export default ClothesDesign;
