import React from "react";
import { Route, Routes } from "react-router-dom";

//routes
// ===============Layout==================
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

// =================Pages=================
import Home from "../pages/Home";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default RouteList;
