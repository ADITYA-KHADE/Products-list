import React, { useState } from "react";
import products from "../../assets/Product";
import Cart from "../Cart/Cart";
import Pagination from "@mui/material/Pagination";
import Search from "./Search";
import { useTheme } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const originalData = products;
  const [data, setData] = useState(originalData);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;
  const { theme } = useTheme();

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(data.length / usersPerPage);

  const handlePageChange = (event, page) => setCurrentPage(page);

  return (
    <div
      className={`p-4 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-slate-200 text-gray-900"
      }`}
    >
      <Search originalData={originalData} setalldata={setData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentUsers.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Cart product={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color={theme === "dark" ? "secondary" : "primary"}
        />
      </div>
    </div>
  );
};

export default ProductsList;
