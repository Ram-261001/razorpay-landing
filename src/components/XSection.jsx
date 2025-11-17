import React from "react";
import "./XSection.css";

const XSection = () => {
  return (
    <section id="xsection" className="x-section">
      <h2>Paykaro — Smart Banking for Your Business</h2>
      <p className="x-subtext">
        Automate payouts, manage vendor payments, salary disbursals, and more.
      </p>

      <div className="x-grid">
        <div className="x-card">
          <img
            src="/images/n.png"
            alt="RazorpayX dashboard"
          />
          <h3>Smart Business Banking</h3>
          <p>Manage your entire business finances on one powerful dashboard.</p>
        </div>

        <div className="x-card">
          <img
            src="/images/n1.png"
            alt="payroll"
          />
          <h3>Payroll Automation</h3>
          <p>Easily automate salary payments, compliance, and reports.</p>
        </div>

        <div className="x-card">
          <img
            src="/images/n2.png"
            alt="payouts"
          />
          <h3>Instant Payouts</h3>
          <p>Send money instantly via UPI, IMPS, RTGS & NEFT anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default XSection;
