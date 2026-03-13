import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import te1 from "../assets/te1.jpg";

function LookbookPage() {
  const navigate = useNavigate();

  const stories = [
    {
      text: "Not Just Fabric. It’s Power.",
      image:
        "https://images.unsplash.com/photo-1520975922284-3b3f4c1a3f98?q=80&w=1600",
    },
    {
      text: "Street Is Our Kingdom.",
      image:
        "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600",
    },
    {
      text: "Born From The Shadows.",
      image:
        "https://images.unsplash.com/photo-1495121605193-b116b5b09a7e?q=80&w=1600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ overflowX: "hidden", fontFamily: "sans-serif" }}
    >
      {/* 🔥 HERO */}
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1
            style={{
              fontSize: "clamp(40px,8vw,90px)",
              letterSpacing: "6px",
            }}
          >
            LOOKBOOK
          </h1>
          <p style={{ marginTop: "20px", color: "#ccc" }}>
            A visual story of dominance & identity.
          </p>
        </motion.div>
      </div>

      {/* 🖤 STICKY SCROLL STORY */}
      {stories.map((item, index) => (
        <section
          key={index}
          style={{
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <motion.img
            src={item.image}
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -2,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
            }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(28px,5vw,60px)",
              letterSpacing: "3px",
              textAlign: "center",
              padding: "20px",
              maxWidth: "900px",
            }}
          >
            {item.text}
          </motion.h2>
        </section>
      ))}

      {/* 🔥 PREMIUM SPLIT FEATURE */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          background: "#111",
          color: "white",
        }}
      >
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            flex: "1 1 500px",
            minHeight: "500px",
          }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={te1}
            alt="Dark Tee"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            flex: "1 1 500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(40px,8vw,100px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px,4vw,50px)",
              letterSpacing: "3px",
            }}
          >
            Dark Oversized Tee
          </h2>

          <p style={{ marginTop: "20px", color: "#aaa", lineHeight: 1.8 }}>
            Crafted for dominance. Engineered with premium cotton.
            Oversized silhouette designed to command presence.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            style={{
              marginTop: "40px",
              padding: "16px 50px",
              background: "#ff1a1a",
              border: "none",
              borderRadius: "40px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 40px red",
              width: "fit-content",
            }}
            onClick={() => navigate("/collections")}
          >
            Shop This Look
          </motion.button>
        </motion.div>
      </div>

      {/* 🔥 FINAL MINIMAL CTA */}
      <div
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background: "#000",
          color: "white",
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(30px,6vw,60px)",
            letterSpacing: "4px",
          }}
        >
          OWN YOUR PRESENCE
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default LookbookPage;
