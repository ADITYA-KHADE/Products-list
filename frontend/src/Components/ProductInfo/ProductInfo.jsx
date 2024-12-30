import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const result = await response.json();
        setProduct(result.data); 
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold text-gray-600">Loading product...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold text-red-500">{error}</h2>
      </div>
    );
  }

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
    <>
      <Breadcrumb id={id}/>
      <div className="flex flex-col md:flex-row justify-center p-4">
        <div className="md:w-1/2 p-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={product.name}
            className="h-64 w-3/4 object-cover rounded-lg shadow-md mx-auto"
          />
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt={`Thumbnail ${i + 1}`}
                className="h-16 w-16 object-cover rounded-md shadow cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-lg text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-lg font-bold text-gray-600 mt-2">
            Total Stock: {product.stock}
          </p>
          <div className="flex items-center mt-4">
            <span className="text-2xl font-semibold text-blue-600">
              ${product.price} /-
            </span>
          </div>
          <div className="flex items-center mt-4">
            <span className="badge badge-outline text-gray-700">
              {product.category}
            </span>
          </div>
          <button className="btn btn-primary mt-4">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
