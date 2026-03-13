import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import te2 from "../assets/te2.jpg";
import sh4 from "../assets/sh4.jpg";
import jk1 from "../assets/jk1.jpg";


function NewArrivalsPage() {
  const navigate = useNavigate();

  const products = [
   {
      id: 1,
      name: "T-shirt",
      price: 599,
      image: te2,
    },
    {
      id: 2,
      name: "shirts",
      price: 900,
      image: sh4,
    },
   {
      id: 3,
      name: "jeckets",
      price: 1100,
      image: jk1,
    },
  ];

  // 🔥 Countdown Timer Logic
const targetDate = new Date("2026-03-01T00:00:00").getTime();

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

function calculateTimeLeft() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);


  return (
    <div style={{ padding: "100px 40px", background: "#0a0a0a", minHeight: "100vh", color: "white" }}>
      
      <h1 style={{ textAlign: "center", color: "#ff1a1a", marginBottom: "50px" }}>
        🔥 New Arrivals
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(255,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "50%", borderRadius: "10px" }}
            />

            <h3 style={{ marginTop: "15px" }}>{product.name}</h3>
            <p style={{ color: "#ff1a1a", fontWeight: "bold" }}>
              ₹{product.price}
            </p>

            <button
              onClick={() => navigate("/order", { state: { cart: [product] } })}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                background: "#ff1a1a",
                border: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Order Now 🚀
            </button>
          </div>
        ))}
      </div>

        {/* 🔥 FEATURED DROP SECTION */}
<div
  style={{
    marginTop: "80px",
    marginBottom: "80px",
    padding: "60px 30px",
    background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://via.placeholder.com/1400x700')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 0 40px rgba(255,0,0,0.4)",
  }}
>
  <h1 style={{ fontSize: "40px", letterSpacing: "2px" }}>
    🔥 LUCIFUR STREET DROP 2.0
  </h1>

  <div
    style={{
      display: "inline-block",
      background: "#ff1a1a",
      padding: "8px 20px",
      borderRadius: "30px",
      fontWeight: "bold",
      marginTop: "15px",
      boxShadow: "0 0 15px red",
    }}
  >
    LIMITED STOCK
  </div>

  {/* ⏳ Countdown */}
  {timeLeft ? (
    <div
      style={{
        marginTop: "30px",
        fontSize: "22px",
        fontWeight: "bold",
        letterSpacing: "2px",
      }}
    >
      {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M :{" "}
      {timeLeft.seconds}S
    </div>
  ) : (
    <div style={{ marginTop: "30px", color: "red", fontWeight: "bold" }}>
      DROP ENDED
    </div>
  )}

  <p style={{ marginTop: "25px", maxWidth: "600px", marginInline: "auto" }}>
    Built for dominance. Designed for the streets. Premium oversized fit
    crafted from high-quality cotton.
  </p>

  <button
    style={{
      marginTop: "25px",
      padding: "12px 35px",
      background: "#ff1a1a",
      border: "none",
      borderRadius: "30px",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 0 25px red",
      transition: "0.3s",
    }}
  >
    🔥 Shop This Drop
  </button>
</div>

{/* 🔥 LOOKBOOK PREVIEW SECTION */}
<div
  style={{
    marginTop: "100px",
    marginBottom: "80px",
    textAlign: "center",
    color: "white",
  }}
>
  <h2
    style={{
      fontSize: "36px",
      marginBottom: "10px",
      letterSpacing: "2px",
    }}
  >
    SEE IT IN ACTION
  </h2>

  <p style={{ color: "#aaa", marginBottom: "50px" }}>
    Real fits. Real street dominance.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
    }}
  >
    {[
      "https://via.placeholder.com/400x600",
      "https://via.placeholder.com/400x600",
      "https://via.placeholder.com/400x600",
      "https://via.placeholder.com/400x600",
    ].map((img, index) => (
      <div
        key={index}
        style={{
          overflow: "hidden",
          borderRadius: "15px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <img
          src={img}
          alt="Lookbook"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.08)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />

        {/* Dark Overlay on Hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        ></div>
      </div>
    ))}
  </div>
</div>

{/* 🔥 TRUST / BRAND VALUE SECTION */}
<div
  style={{
    marginTop: "100px",
    marginBottom: "60px",
    padding: "40px 20px",
    background: "#111",
    borderRadius: "20px",
    boxShadow: "0 0 30px rgba(255,0,0,0.2)",
    textAlign: "center",
    color: "white",
  }}
>
  <h3
    style={{
      marginBottom: "40px",
      fontSize: "28px",
      letterSpacing: "2px",
    }}
  >
    WHY LUCIFUR?
  </h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
    }}
  >
    {[
      { title: "Premium Fabric", desc: "Crafted from high-quality materials for ultimate comfort." },
      { title: "100% Cotton", desc: "Breathable, durable, and made to last." },
      { title: "Made in India", desc: "Proudly designed and manufactured locally." },
      { title: "Fast Shipping", desc: "Quick dispatch with reliable delivery." },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          padding: "20px",
          borderRadius: "15px",
          background: "#0a0a0a",
          transition: "0.3s",
          cursor: "default",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,0,0.4)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.boxShadow = "none")
        }
      >
        <h4 style={{ color: "#ff1a1a", marginBottom: "10px" }}>
          {item.title}
        </h4>
        <p style={{ color: "#aaa", fontSize: "14px" }}>
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>

{/* 🔥 FINAL CALL TO ACTION SECTION */}
<div
  style={{
    marginTop: "120px",
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(to right, #000000, #111111)",
    borderTop: "1px solid rgba(255,0,0,0.3)",
    color: "white",
  }}
>
  <h1
    style={{
      fontSize: "42px",
      letterSpacing: "3px",
      marginBottom: "20px",
    }}
  >
    DON’T MISS THIS DROP
  </h1>

  <p
    style={{
      color: "#aaa",
      marginBottom: "40px",
      maxWidth: "600px",
      marginInline: "auto",
    }}
  >
    Limited pieces. Premium quality. Once it’s gone, it’s gone.
  </p>

  <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
    <button
      style={{
        padding: "14px 40px",
        background: "#ff1a1a",
        border: "none",
        borderRadius: "30px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 0 25px red",
        transition: "0.3s",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      🔥 Shop Now
    </button>

    <button
      style={{
        padding: "14px 40px",
        background: "transparent",
        border: "1px solid #ff1a1a",
        borderRadius: "30px",
        color: "#ff1a1a",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.background = "#ff1a1a")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.background = "transparent")
      }
    >
      Explore More
    </button>
  </div>
</div>




    </div>
  );
}

export default NewArrivalsPage;
