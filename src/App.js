import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import XSection from "./components/XSection";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
import "./App.css";
import "./components/Animations.css";
import ActionBar from "./components/ActionBar";
import ProductTabs from "./components/ProductTabs";

function App() {
  return (
    <>
      <Navbar />
      <ActionBar/>      
      <Hero />
      <Features />
      <Products />
      <ProductTabs />
      <XSection />
      <Logos />
      <Footer />
    </>
  );
}

export default App;
