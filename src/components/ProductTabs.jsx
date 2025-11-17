import React, { useState } from "react";
import "./ProductTabs.css";

const tabs = [
    "Top Products",
    "On Website/App",
    "Plugins",
    "On Social Media",
    "In-Store",
    "Cross-Border",
    "With Smart Ad-Ons"
];

// Example product cards (You can add more)
const productData = {
    "Top Products": [
        {
            title: "Pay using card",
            subtitle: "UPI • Card • Netbanking",
            tag: "NO CODE",
            img: "/images/prod1.png"
        },
        {
            title: "UPI ID",
            subtitle: "Fast & Secure Payments",
            tag: "NO CODE",
            img: "/images/prod2.png"
        },
        {
            title: "In-Store Payments",
            subtitle: "QR & POS Payments",
            tag: "",
            img: "/images/prod3.png"
        }
    ],

    "On Website/App": [
        {
            title: "Payment Gateway",
            subtitle: "UPI • Cards • EMI",
            tag: "",
            img: "/images/prod4.png"
        }
    ],

    Plugins: [
        {
            title: "WooCommerce Plugin",
            subtitle: "1-click Integration",
            tag: "",
            img: "/images/prod5.png"
        }
    ],

    "On Social Media": [
        {
            title: "Payment Links",
            subtitle: "Collect in Minutes",
            tag: "",
            img: "/images/prod6.png"
        }
    ],

    "In-Store": [
        {
            title: "POS Machines",
            subtitle: "Smart Terminals",
            tag: "",
            img: "/images/prod7.png"
        }
    ],

    "Cross-Border": [
        {
            title: "International Payments",
            subtitle: "100+ Countries",
            tag: "",
            img: "/images/prod8.png"
        }
    ],

    "With Smart Ad-Ons": [
        {
            title: "Smart Collect",
            subtitle: "UPI + QR + VPA",
            tag: "",
            img: "/images/prod9.png"
        }
    ]
};

const ProductTabs = () => {
    const [active, setActive] = useState("Top Products");

    return (
        <section className="product-tabs-section">
            <h2 className="tabs-title">Accept Payments</h2>

            {/* Tabs */}
            <div className="tabs-row">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${active === tab ? "active" : ""}`}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="product-grid">
                {productData[active].map((card, index) => (
                    <div className="prod-card" key={index}>
                        {card.tag && <span className="tag">{card.tag}</span>}
                        <img src={card.img} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductTabs;
