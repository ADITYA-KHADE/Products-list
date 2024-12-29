import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product added successfully!");
        setProductData({
          name: "",
          price: "",
          description: "",
          category: "",
          image: "",
          stock: "",
        });
      })
      .catch((err) => {
        toast.error("Error adding product.");
        console.error(err);
      });
  };

  return (
    <div className="p-5 border-2 border-gray-600 max-w-screen-md mx-auto bg-gray-300">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="p-2 space-y-3">
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          name="name"
          value={productData.name}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          name="description"
          value={productData.description}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          name="category"
          value={productData.category}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          name="image"
          value={productData.image}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Stock"
          variant="outlined"
          fullWidth
          name="stock"
          type="number"
          value={productData.stock}
          onChange={handleChange}
          className="mb-4"
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
