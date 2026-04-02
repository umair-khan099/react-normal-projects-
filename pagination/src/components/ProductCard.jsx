import React from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className="bg-green-50 hover:bg-green-100 transition duration-300 rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-cover rounded-xl mb-3"
      />
      <p className="text-green-900 font-semibold text-center">{title}</p>
    </div>
  );
};

export default ProductCard;
