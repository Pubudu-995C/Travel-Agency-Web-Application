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
// ===============Team==================
import Tharaka from "../pages/team/Tharaka";
// =================Pages=================
import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import Destinations from "../pages/Destinations";
import Accessible from "../pages/accessible";
// =================Contact Form=================
import ContactForm from "../pages/Contact-Form";
// =================Gallery=================
import Gallery from "../pages/Contact-Form";
// =================Trips=================
import Trips from "../pages/Trips";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/Accessible" element={<Accessible />} />
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
      {/* ===============Team================== */}
      <Route path="/Tharaka" element={<Tharaka />} />
      {/* ===============Contact Form================== */}
      <Route path="/contactForm" element={<ContactForm />} />
      {/* ===============Gallery================== */}
      <Route path="/gallery" element={<Gallery />} />
      {/* ===============Trips================== */}
      <Route path="/trips" element={<Trips />} />
    </Routes>
  );
};

export default RouteList;
