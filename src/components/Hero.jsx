import React, { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    title: "Powering Digital Payments For India",
    subtitle: "Trusted by millions of businesses",
    desc: "Accept, process, and disburse payments easily with PayWave.",
    images: ["/images/p1.jpg"],
    bg: "#eef4ff",
  },

  {
    title: "Seamless Online Payments",
    subtitle: "Fast checkout experience",
    desc: "UPI • Cards • Wallets • EMI • Netbanking — all in one place.",
    images: ["/images/p2.jpeg"],
    bg: "#f4f9ff",
  },

  {
    title: "Collect Payments Instantly",
    subtitle: "Payment Links for Every Business",
    desc: "No website required. Share links & start accepting payments.",
    images: ["/images/p3.jpg"],
    bg: "#e9f6ff",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const auto = setInterval(next, 4000);
    return () => clearInterval(auto);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ background: slides[index].bg }}
    >
      <div className="hero-container">
        
        {/* TEXT CONTENT */}
        <div className="hero-left fade">
          <h1>{slides[index].title}</h1>
          <h2>{slides[index].subtitle}</h2>
          <p>{slides[index].desc}</p>
          <button className="hero-btn">Get Started</button>
        </div>

        {/* IMAGE */}
        <div className="hero-right fade">
          <img
            src={slides[index].images[0]}   // FIXED
            alt="Hero"
          />
        </div>

        {/* NAV BUTTONS */}
        <button className="hero-arrow left" onClick={prev}>❮</button>
        <button className="hero-arrow right" onClick={next}>❯</button>

        {/* Background shape */}
        <img
          className="bg-shape"
          src="https://razorpay.com/build/browser/static/home-abstract.83f04c64.png"
          alt="bg-shape"
        />
      </div>
    </section>
  );
};

export default Hero;
