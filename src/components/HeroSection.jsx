import "./HeroSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImg from "../assets/home.png";
import img1 from "../assets/Lucifur.jpg";
import img2 from "../assets/Avinash.jpg";
import img4 from "../assets/bh01.jpg";
import img5 from "../assets/sh1.jpg";
import img6 from "../assets/te3.jpg";
import img7 from "../assets/jk4.jpg";
import BrandShowcase from "./BrandShowcase";
import CustomNavbar from "./CustomNavbar";
import { useNavigate } from "react-router-dom";




function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
    <CustomNavbar/>
      <div
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay"></div>
{/* ============================================================================= */}
<div
  className="hero-content position-absolute position-lg-absolute position-relative"
  style={{
    bottom: "12%",
    right: "6%",
    left: "6%",
    color: "white",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(8px)",
    padding: "clamp(20px, 4vw, 50px)",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
    maxWidth: "600px",
    marginLeft: "auto",
  }}
>
  <p
    className="hero-subtitle"
    style={{
      fontSize: "clamp(14px, 2vw, 18px)",
      letterSpacing: "3px",
      marginBottom: "15px",
      opacity: 0,
      animation: "crackUp 1.2s ease forwards",
    }}
  >
    
  </p>

  <h1
    className="hero-title"
    style={{
      fontSize: "clamp(28px, 6vw, 64px)",
      fontWeight: "800",
      lineHeight: "1.2",
      opacity: 0,
      animation: "crackUp 1.6s ease forwards",
      animationDelay: "0.3s",
    }}
  >
    OWN THE DARK. <br /> WEAR THE POWER.
  </h1>

  <button
    className="btn btn-outline-light hero-btn"
    style={{
      marginTop: "25px",
      padding: "12px 35px",
      borderRadius: "40px",
      border: "2px solid white",
      background: "transparent",
      color: "white",
      fontWeight: "600",
      opacity: 0,
      animation: "fadeSlideUp 1.8s ease forwards",
      animationDelay: "0.8s",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "#ff1a1a";
      e.target.style.border = "2px solid #ff1a1a";
      e.target.style.transform = "scale(1.1)";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "transparent";
      e.target.style.border = "2px solid white";
      e.target.style.transform = "scale(1)";
    }}
  >
    SHOP NOW
  </button>

  <style>
    {`
      @media (max-width: 991px) {
        .hero-content {
          position: relative !important;
          bottom: auto !important;
          right: auto !important;
          text-align: center !important;
          margin: 40px auto !important;
        }
      }

      @keyframes crackUp {
        0% {
          transform: translateY(100px) scaleY(1.3);
          opacity: 0;
          letter-spacing: 8px;
          filter: blur(6px);
        }
        60% {
          transform: translateY(-10px) scaleY(0.9);
          opacity: 0.7;
          letter-spacing: 4px;
          filter: blur(2px);
        }
        100% {
          transform: translateY(0) scaleY(1);
          opacity: 1;
          letter-spacing: normal;
          filter: blur(0);
        }
      }

      @keyframes fadeSlideUp {
        0% {
          transform: translateY(60px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `}
  </style>
</div>


        {/* ================================================================ */}
      </div>

      {/* LUCIFUR EXCLUSIVE Featured Drops */}

   <section
  style={{
    background: "linear-gradient(180deg, #0f0f0f, #1a1a1a)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div className="container">

    {/* HEADER */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "80px",
        color: "white",
        animation: "fadeDown 1.2s ease forwards",
        opacity: 0,
      }}
    >
      <p
        style={{
          letterSpacing: "5px",
          color: "#ff2e63",
          fontSize: "14px",
        }}
      >
        LUCIFUR EXCLUSIVE
      </p>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginTop: "15px",
        }}
      >
        Featured Drops
      </h2>
    </div>

    <div className="row g-5">

      {[
        { img: img4, title: "Oversized Shadow Tee", price: "₹1,999" },
        { img: img5, title: "Midnight Flame Shirt", price: "₹2,499" },
        { img: img6, title: "Lucifur Street Tee", price: "₹1,799" },
        { img: img7, title: "Dark Aura Shirt", price: "₹2,699" },
      ].map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6">

          <div
            style={{
              position: "relative",
              borderRadius: "30px",
              overflow: "hidden",
              background: "#111",
              boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
              transform: "perspective(1000px) rotateY(0deg)",
              transition: "all 0.6s ease",
              opacity: 0,
              animation: `fadeUp 1s ease forwards`,
              animationDelay: `${index * 0.2}s`,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateY(8deg) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 40px 100px rgba(255,0,80,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px) rotateY(0deg) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(0,0,0,0.8)";
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "380px",
                objectFit: "cover",
                transition: "transform 1s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.transform = "scale(1.15)")
              }
              onMouseOut={(e) =>
                (e.target.style.transform = "scale(1)")
              }
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "30px",
                color: "white",
              }}
            >
              <h4 style={{ fontSize: "20px", fontWeight: "600" }}>
                {item.title}
              </h4>

              <p
                style={{
                  marginTop: "8px",
                  fontSize: "16px",
                  color: "#ff2e63",
                  fontWeight: "600",
                }}
              >
                {item.price}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 25px",
                  borderRadius: "30px",
                  border: "1px solid #ff2e63",
                  background: "transparent",
                  color: "white",
                  transition: "all 0.4s ease",
                }}
                 onClick={() => navigate("/shop")}
                onMouseOver={(e) => {
                  e.target.style.background = "#ff2e63";
                  e.target.style.transform = "translateY(-5px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                View Product
              </button>
            </div>
          </div>

        </div>
      ))}

    </div>
  </div>

  <style>
    {`
      @keyframes fadeUp {
        0% {
          transform: translateY(60px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes fadeDown {
        0% {
          transform: translateY(-40px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `}
  </style>
</section>


      {/* Why Choose Lucifur?*/}

   <section
  style={{
  background: "radial-gradient(circle at 20% 20%, #ffffff, #959292)",    padding: "120px 0",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div className="container">

    {/* HEADER */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "80px",
        color: "white",
        animation: "fadeDown 1.2s ease forwards",
        opacity: 0,
      }}
    >
      <h2
        style={{
          fontSize: "44px",
          fontWeight: "700",
          letterSpacing: "1px",
          color:'black'
        }}
      >
        Why Choose Lucifur?
      </h2>
      <p
        style={{
          color: "#000000",
          marginTop: "15px",
          fontSize: "16px",
        }}
      >
        Premium streetwear brand built on quality, trust & bold attitude.
      </p>
    </div>

    <div className="row g-4">

      {[
        { icon: "🚚", title: "All India Shipping", desc: "Fast & secure delivery across India." },
        { icon: "👕", title: "Premium Fabric Quality", desc: "Soft, durable & high GSM fabric." },
        { icon: "🔥", title: "Trend Focused Designs", desc: "Latest drops inspired by street culture." },
        { icon: "🏬", title: "Trusted Offline Store", desc: "Real store presence & loyal customers." },
      ].map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6">

          <div
            style={{
              background: "#141414",
              padding: "40px 25px",
              borderRadius: "25px",
              textAlign: "center",
              color: "white",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.6s ease",
              transform: "translateY(60px)",
              opacity: 0,
              animation: `fadeUp 1s ease forwards`,
              animationDelay: `${index * 0.2}s`,
              boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(255,0,60,0.6)";
              e.currentTarget.style.background = "#1a1a1a";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(0,0,0,0.7)";
              e.currentTarget.style.background = "#141414";
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
                animation: "floatIcon 3s ease-in-out infinite",
              }}
            >
              {item.icon}
            </div>

            <h4
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                fontSize: "14px",
                color: "#bbb",
              }}
            >
              {item.desc}
            </p>

            {/* RED GLOW EFFECT */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "-50px",
                width: "150px",
                height: "150px",
                background:
                  "radial-gradient(circle, rgba(255,0,60,0.4), transparent)",
                filter: "blur(60px)",
                zIndex: "0",
              }}
            ></div>
          </div>

        </div>
      ))}

    </div>
  </div>

  <style>
    {`
      @keyframes fadeUp {
        0% {
          transform: translateY(80px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes fadeDown {
        0% {
          transform: translateY(-50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes floatIcon {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
        100% { transform: translateY(0px); }
      }
    `}
  </style>
</section>


<br/>



      {/* SEARCH PRODUCTS */}
<br/>

<BrandShowcase/>


      {/* ---------------------left to right scroll --------------------- */}

 <section className="premium-strip">
  <div className="ticker">
    <div className="premium-text">
      ⚡ LIMITED EDITION DROPS LIVE NOW ⚡ &nbsp; • &nbsp;
      PREMIUM STREETWEAR COLLECTION &nbsp; • &nbsp;
      FREE SHIPPING ON ORDERS ABOVE $99 &nbsp; • &nbsp;
    </div>

    <div className="premium-text">
      ⚡ LIMITED EDITION DROPS LIVE NOW ⚡ &nbsp; • &nbsp;
      PREMIUM STREETWEAR COLLECTION &nbsp; • &nbsp;
      FREE SHIPPING ON ORDERS ABOVE $99 &nbsp; • &nbsp;
    </div>
  </div>

  <style>{`
    .premium-strip {
      background: #ffffff;
      padding: 14px 0;
      overflow: hidden;
      position: relative;
      border-top: 1px solid rgba(255,0,0,0.3);
      border-bottom: 1px solid rgba(255,0,0,0.3);
    }

    .ticker {
      display: flex;
      width: fit-content;
      animation: scrollText 18s linear infinite;
    }

    .premium-text {
      white-space: nowrap;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #ff2a2a;
      padding-right: 50px;
      text-shadow: 
        0 0 4px #ff0000,
        0 0 8px rgba(255,0,0,0.6);
    }

    @keyframes scrollText {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    /* 🔥 subtle glow pulse */
    .premium-strip::after {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255,0,0,0.08), transparent 70%);
      pointer-events: none;
    }

    @media(max-width: 768px){
      .premium-text{
        font-size: 13px;
        letter-spacing: 1px;
      }
    }

  `}</style>
</section>

      
  
    </>
  );
}

export default HeroSection;