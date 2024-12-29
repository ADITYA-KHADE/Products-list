import React from "react";
import { useEffect } from "react";
import Login from "./Pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";
import ProductInfo from "./Components/ProductInfo/ProductInfo"
import "./App.css";

const App = () => {
  const { authUser } = useAuthContext();
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/api/auth/getToken',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id:authUser._id}),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if(authUser){
      fetchData();
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/product/:id"
          element={authUser ? <ProductInfo /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
