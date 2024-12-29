import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import ProductsList from "../Components/ProductsList/ProductsList";
import AddProduct from "../Components/CRUD/AddProduct";
import { useTheme } from "../Contexts/ThemeContext";

const Home = () => {
  const [activetab, setActivetab] = React.useState("products");
  const { theme } = useTheme();
  return (
    <>
    <Navbar activetab={activetab} setActivetab={setActivetab} />
    <div className={`p-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-slate-200 text-gray-900"}`}>
    {activetab === "products" && <ProductsList />}
    {activetab === "addproduct" && <AddProduct />}
    </div>
    </>
  )
}

export default Home
