import React from "react";
import CircleImageWithTitle from "./CircleImageWithTitle";

const ClothesTypes: React.FC = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <CircleImageWithTitle
        title="SUITS"
        image="https://happygentleman.com/wp-content/uploads/2019/11/stz23-mens-3-piece-suit-tweed-grey-1-1-1024x1024.jpg"
      />
      <CircleImageWithTitle
        title="COAT/JACKETS"
        image="https://i.ebayimg.com/images/g/L9sAAOSwS4dfyNQY/s-l1600.jpg"
      />
      <CircleImageWithTitle
        title="DRESS/SHIRT"
        image="https://flare.fullsource.com/images/items/a/273/PORT-S664-True-Blue-A_273x0.jpg"
      />
      <CircleImageWithTitle
        title="PANTS"
        image="https://oldnavy.gap.com/webcontent/0052/572/030/cn52572030.jpg"
      />
    </div>
  );
};

export default ClothesTypes;
