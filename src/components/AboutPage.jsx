import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import brandImg from "../assets/Lucifur.jpg";



function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ overflowX: "hidden", fontFamily: "sans-serif" }}
    >
      
      {/* 🔥 HERO SECTION */}
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('https://via.placeholder.com/1600x900')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "70px",
            letterSpacing: "5px",
          }}
        >
          ABOUT LUCIFUR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: "20px",
            maxWidth: "700px",
            color: "#ccc",
          }}
        >
          Not just a brand. A presence. A movement. An identity.
        </motion.p>
      </div>

      {/* 🔥 BRAND STORY SECTION (White) */}
      <div
        style={{
          padding: "120px 60px",
          background: "white",
          color: "black",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
            Our Story
          </h2>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Lucifur was born from rebellion. From the idea that clothing
            should not just be worn — it should speak. Every collection is
            crafted to represent confidence, dominance, and individuality.
            We don’t follow trends. We create presence.
          </p>
        </motion.div>

        <motion.img
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src={brandImg}
          alt="Brand"
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </div>

      {/* 🔥 PHILOSOPHY STRIP (Luxury Gradient) */}
      <div
        style={{
          background: "linear-gradient(135deg, #1c1c24, #2b0f14)",
          padding: "120px 40px",
          textAlign: "center",
          color: "white",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "42px",
            letterSpacing: "3px",
          }}
        >
          “Lucifur isn’t clothing. It’s an identity.”
        </motion.h2>
      </div>

      {/* 🔥 CRAFT & QUALITY SECTION (White) */}
      <div
        style={{
          padding: "120px 60px",
          background: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "40px", marginBottom: "40px" }}
        >
          Craft. Precision. Detail.
        </motion.h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          {["Premium Fabric", "100% Cotton", "Made in India"].map(
            (item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                style={{
                  background: "white",
                  padding: "30px 50px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                  fontWeight: "bold",
                }}
              >
                {item}
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* 🔥 FINAL CTA */}
      <div
        style={{
          padding: "150px 20px",
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
            fontSize: "50px",
            letterSpacing: "4px",
          }}
        >
          WE DON’T FOLLOW TRENDS.
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            marginTop: "40px",
            padding: "16px 60px",
            background: "#ff1a1a",
            border: "none",
            borderRadius: "40px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 50px red",
          }}
          onClick={() => navigate("/collections")}
        >
          Explore Collections
        </motion.button>
      </div>
    </motion.div>
    
    </div>
  );
}

export default AboutPage;
