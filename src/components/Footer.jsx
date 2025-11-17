import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Paykaro</h2>
          <p>
            A Razorpay-style modern payment experience for your business.
          </p>
        </div>

        <div className="footer-right">

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <a href="/">Payment Gateway</a>
            <a href="/">Payment Links</a>
            <a href="/">Pages</a>
            <a href="/">Subscriptions</a>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <a href="/">Docs</a>
            <a href="/">API Reference</a>
            <a href="/">Status</a>
            <a href="/">Integration</a>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © 2025 PayWave — Inspired by Razorpay Design  
      </div>
    </footer>
  );
};

export default Footer;
