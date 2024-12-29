import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../assets/Product";

const ProductInfo = () => {
  const { id } = useParams();
  const product = Product.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold text-red-500">
          Product not found. Please check the ID.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center p-4">
      {/* Product Image */}
      <div className="md:w-1/2 p-2">
        <img
          src={
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={product.name}
          className="h-64 w-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-lg text-gray-600 mt-2">{product.description}</p>
        <div className="flex items-center mt-4">
          <span className="text-2xl font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="badge badge-outline text-gray-700">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
