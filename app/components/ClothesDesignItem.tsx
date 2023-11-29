import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface ClothesDesignItemProps {
  title: string;
  image: string;
  onSelect?: (item: ClothesDesignItemProps) => void;
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
      onSelect({ title, image });
    }
  };

  return (
    <div className="flex-none">
      <div
        className={` w-24 h-18 justify-center  text-center p-2 rounded-lg text-base  cursor-pointer transition duration-300 ease-in-out transform ${
          isHovered ? "bg-gray-200" : ""
        }${isSelected ? "border-2 border-green-500 bg-emerald-100" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleItemClick}
      >
        <img className="w-24 h-18 object-cover" src={image} alt={title} />
        {isSelected && (
          <div className="absolute top-0 right-0 fill-green-500">
            <FontAwesomeIcon icon={faCheck} size="sm" color="green" />
          </div>
        )}

        <div className="mt-2">
          <p className="whitespace-normal">{title}</p>
        </div>
      </div>
    </div>
  );
};

const ClothesDesign: React.FC = () => {
  // Dummy data for subcategories
  const subcategories = [
    {
      title: "SINGLE-   BREASTED",
      image:
        "https://portofilosuit.com/wp-content/uploads/2018/05/00A7255-1-768x1152.jpg",
    },
    {
      title: "BUTTON",
      image:
        "https://portofilosuit.com/wp-content/uploads/2018/06/00Abeige.jpg",
    },
    {
      title: "POCKET",
      image:
        "https://portofilosuit.com/wp-content/uploads/2018/03/MG_5378-768x1152.jpg",
    },
    {
      title: "SEAMS",
      image:
        "https://portofilosuit.com/wp-content/uploads/2018/03/MG_5618-768x1152.jpg",
    },
    {
      title: "VENTS",
      image:
        "https://portofilosuit.com/wp-content/uploads/2018/03/00A7392-768x1152.jpg",
    },
    {
      title: "SEAMS",
      image:
        "https://portofilosuit.com/wp-content/uploads/2018/03/MG_5618-768x1152.jpg",
    },
    {
      title: "VENTS",
      image:
        "https://portofilosuit.com/wp-content/uploads/2018/03/00A7392-768x1152.jpg",
    },
    // Add more subcategories as needed
  ];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectItem = (title: string) => {
    setSelectedItem(title);
  };

  return (
    <div className="h-full w-full flex flex-wrap items-start text-center justify-start rounded-tl grid-flow-col auto-cols-max gap-4">
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
