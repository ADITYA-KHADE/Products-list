import React from "react";
import { useTheme } from "../../Contexts/ThemeContext";

const Cart = ({ product }) => {
  const { theme } = useTheme();
  const cardBgColor = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800";

  return (
    <div className={`card shadow-xl w-full sm:w-80 md:w-96 mx-auto ${cardBgColor}`}>
      <figure>
        <img
          src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
          alt={product.name || "Product"}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg sm:text-xl">
          {product.name || "Shoes"}
          <div className="badge badge-secondary ml-2">NEW</div>
        </h2>
        <p className="text-sm sm:text-base">{product.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="font-bold">${product.price} /-</div>
          <div className="badge badge-outline">{product.category || "Category"}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
