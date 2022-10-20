import React from "react";
import Navbar from "../components/common/navbar/Navbar";
import Home from "../pages/home/index";
import Footer from "../components/common/footer/Footer";

export default function Layout() {
  return (
    <div className="layout ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
