import React from "react";
import { Route, Routes } from "react-router-dom";

//routes
// ===============Layout==================
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
// ===============Trips==================
import SevenDays from "../pages/trips/SevenDays";
import TenDays from "../pages/trips/TenDays";
import FourteenDays from "../pages/trips/FourteenDays";
import ThirtyDays from "../pages/trips/ThirtyDays";
import FortyFiveDays from "../pages/trips/FortyFiveDays";
import SixtyDays from "../pages/trips/SixtyDays";
// =================Pages=================
import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import Destinations from "../pages/Destinations";
// =================Contact Form=================
import ContactForm from "../pages/Contact-Form";
// =================Gallery=================
import Gallery from "../pages/Contact-Form";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/destinations" element={<Destinations />} />
      {/* ===============Layout================== */}
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />
      {/* ===============Trips================== */}
      <Route path="/SevenDays" element={<SevenDays />} />
      <Route path="/TenDays" element={<TenDays />} />
      <Route path="/FourteenDays" element={<FourteenDays />} />
      <Route path="/ThirtyDays" element={<ThirtyDays />} />
      <Route path="/FortyFiveDays" element={<FortyFiveDays />} />
      <Route path="/SixtyDays" element={<SixtyDays />} />
      {/* ===============Contact Form================== */}
      <Route path="/contactForm" element={<ContactForm />} />
      {/* ===============Gallery================== */}
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default RouteList;
