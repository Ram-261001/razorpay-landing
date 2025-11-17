import React from "react";
import "./Products.css";

const products = [
  {
    name: "Payment Gateway",
    desc: "Accept payments from UPI, Cards, Netbanking, Wallets & EMI.",
    img: "/images/pg.png",
  },
  {
    name: "Payment Pages",
    desc: "Create custom hosted pages and collect payments instantly.",
    img: "/images/pg1.png",
  },
  {
    name: "Payment Links",
    desc: "Share links via WhatsApp, Email, SMS & start collecting payments.",
    img: "/images/pg2.png",
  },
  {
    name: "Subscriptions",
    desc: "Automate recurring payments with subscription billing.",
    img: "/images/pg3.png",
  },
];

const Products = () => {
  return (
    <section id="products" className="products-section">
      <h2>Product Suite</h2>
      <p className="product-subtext">
        A complete set of tools designed to help your business grow.
      </p>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card fade-up" key={p.name}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button className="product-btn">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
