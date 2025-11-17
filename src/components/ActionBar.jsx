import React from "react";
import "./ActionBar.css";

const ActionBar = () => {
  return (
    <div className="top-banner-wrapper">
      <div className="top-banner">

        {/* LEFT SIDE */}
        <div className="banner-left">
          <span className="bold">MoneySaver</span>
          <span className="highlight">Export Account</span>
        </div>

        {/* MIDDLE TEXT */}
        <div className="banner-middle">
          0 forex markup. 75% savings on international bank transfers!
          <button className="banner-link-btn">Sign Up Now</button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="banner-right">
          <img src="/images/s1.png" alt="currencies" />
        </div>

      </div>
    </div>
  );
};

export default ActionBar;
