import React, { useState } from "react";

const UpdateProduct = ({productData,setUpdateModal}) => {
  const [updatedProduct, setUpdatedProduct] = useState(productData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Logic for updating the product (e.g., API call)
    console.log("Updated Product Data:", updatedProduct);
    setUpdateModal(false);
  };

  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Update Product</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={updatedProduct.category}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              name="stock"
              value={updatedProduct.stock}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-3">
          <button
            onClick={() => setUpdateModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct




