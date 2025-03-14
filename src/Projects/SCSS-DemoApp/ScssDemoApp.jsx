import React from "react";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import "./styles/ScssDemoApp.module.scss";
import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import Button from "./Button/Button";
const ScssDemoApp = () => {
  return (
    <div className="scss-demo-app">
      <Navbar />
      <Header />
      <HeroSection />
      <Cards />
      <div className="mb-4 flex justify-center items-center gap-5">
        <Button text="Learn More" />
        <Button type="danger" text="Delete" />
      </div>
      <Footer />
    </div>
  );
};

export default ScssDemoApp;
