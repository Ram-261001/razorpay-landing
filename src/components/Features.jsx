import React from "react";
import "./Features.css";

const featureData = [
  {
    title: "100+ Payment Methods",
    desc: "Offer UPI, Cards, Netbanking, Wallets & EMI options.",
    icon: "/images/ic.png",
  },
  {
    title: "Fast Settlements",
    desc: "Get your payments settled quickly and securely.",
    icon: "/images/ic2.png",
  },
  {
    title: "Smart Analytics",
    desc: "Real-time insights for better business decisions.",
    icon: "/images/ic3.png",
  },
  {
    title: "Secure & Reliable",
    desc: "PCI-DSS Level 1 compliant with fraud prevention tools.",
    icon: "/images/ic4.png",
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Why Choose PayWave?</h2>

      <div className="features-grid">
        {featureData.map((f) => (
          <div className="feature-card" key={f.title}>
            <img src={f.icon} alt="icon" />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
