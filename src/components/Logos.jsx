import React from "react";
import "./Logos.css";

const logos = [
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s5.png",
];

const Logos = () => {
  return (
    <section id="logos" className="logos-section">
      <h2>Trusted by Leading Brands</h2>

      <div className="logos-row">
        {logos.map((logo) => (
          <img src={logo} alt="brand-logo" key={logo} />
        ))}
      </div>
    </section>
  );
};

export default Logos;
