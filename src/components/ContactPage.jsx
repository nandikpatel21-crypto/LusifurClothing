import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmail = () => {
    const subject = `Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `;

    window.location.href = `mailto:support@lucifur.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const message = `
*New Contact Message*

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `;

    window.open(
      `https://wa.me/7412838671?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ background: "#000", color: "white", fontFamily: "sans-serif" }}
      >
        {/* 🔥 HERO SECTION */}
        <div
          style={{
            height: "60vh",
            background:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(40px,7vw,80px)",
              letterSpacing: "6px",
            }}
          >
            CONTACT US
          </motion.h1>
        </div>

        {/* 🖤 SPLIT SECTION */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            padding: "clamp(40px,8vw,120px)",
            gap: "60px",
          }}
        >
          {/* LEFT TEXT */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ flex: "1 1 400px" }}
          >
            <h2
              style={{
                fontSize: "clamp(30px,5vw,50px)",
                letterSpacing: "4px",
                marginBottom: "30px",
              }}
            >
              We Don’t Do Basic.
            </h2>

            <p style={{ color: "#aaa", lineHeight: 1.8 }}>
              Questions. Collaborations. Drops.
              If you’re reaching out, make it count.
              Lucifur isn’t just fashion — it’s identity.
            </p>

            <div style={{ marginTop: "40px", color: "#888" }}>
              <p>Email: support@lucifur.com</p>
              <p>Instagram: @lucifur.official</p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              flex: "1 1 400px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "none" }}
            />

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              <motion.button
                type="button"
                onClick={handleEmail}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  flex: "1",
                  padding: "16px",
                  background: "#ff1a1a",
                  border: "none",
                  borderRadius: "40px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 30px red",
                }}
              >
                Send via Email
              </motion.button>

              <motion.button
                type="button"
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  flex: "1",
                  padding: "16px",
                  background: "#111",
                  border: "1px solid #25D366",
                  color: "#25D366",
                  borderRadius: "40px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 20px #25D366",
                }}
              >
                Send via WhatsApp
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  background: "transparent",
  border: "1px solid #333",
  padding: "16px 20px",
  color: "white",
  borderRadius: "10px",
  outline: "none",
  fontSize: "16px",
  transition: "0.3s",
};

export default ContactPage;
