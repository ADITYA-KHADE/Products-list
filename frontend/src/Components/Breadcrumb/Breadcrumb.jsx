import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ id }) => {
  return (
    <nav className="breadcrumbs text-sm py-2 px-4 bg-slate-100 text-gray-700 rounded-md shadow-md">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            Products
          </Link>
        </li>
       
        <li className="font-semibold text-blue-600">{id}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
