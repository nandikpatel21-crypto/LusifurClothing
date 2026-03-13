import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import image01 from "../assets/Lucifur.jpg";
import Logo from "../assets/logolucifur.jpg";

function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [sectionColor, setSectionColor] = useState("red");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // ✅ Chatbot State (ADDED)
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Welcome to Lucifur Clothing! How can I help you?", sender: "bot" }
  ]);

  // ✅ Predefined replies
  const handleUserClick = (question) => {
    let reply = "";

    if (question === "Order kaise kare?") {
      reply = "Aap Shop page par jaakar product select kare aur WhatsApp se order confirm kare 💚";
    } else if (question === "Delivery time?") {
      reply = "Delivery 5-7 working days me ho jaati hai 🚚";
    } else if (question === "Size guide?") {
      reply = "Size guide product page par available hai 📏";
    } else if (question === "Return policy?") {
      reply = "7 days easy return available hai ✅";
    }

    setMessages((prev) => [
      ...prev,
      { text: question, sender: "user" },
      { text: reply, sender: "bot" }
    ]);
  };

  // Intro logic
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("introShown");

    if (location.pathname === "/" && !hasVisited) {
      setLoading(true);
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "auto";
        sessionStorage.setItem("introShown", "true");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 80);

      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          const color = sec.getAttribute("data-navcolor");
          if (color) setSectionColor(color);
        }
      });

      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      const progress = document.getElementById("scrollProgress");
      if (progress) progress.style.width = scrolledPercent + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "New Arrivals", path: "/new" },
    { name: "About", path: "/about" },
    { name: "Lookbook", path: "/lookbook" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {loading && (
        <div className="intro-screen">
          <img src={image01} alt="Lucifur Logo" className="intro-logo" />
        </div>
      )}

      <div id="scrollProgress"></div>

      <Navbar
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? "scrolled" : ""} ${sectionColor}`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="brand">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto nav-links">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.name}
                  as={NavLink}
                  to={item.path}
                  onClick={() => setActive(item.name)}
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ CHATBOT UI ADDED */}
      <div className="chatbot-container">
        {chatOpen && (
          <div className="chatbox">
            <div className="chat-header">
              Lucifur Assistant ✨
              <span onClick={() => setChatOpen(false)}>✖</span>
            </div>

            <div className="chat-body">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-msg ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-options">
              <button onClick={() => handleUserClick("Order kaise kare?")}>Order kaise kare?</button>
              <button onClick={() => handleUserClick("Delivery time?")}>Delivery time?</button>
              <button onClick={() => handleUserClick("Size guide?")}>Size guide?</button>
              <button onClick={() => handleUserClick("Return policy?")}>Return policy?</button>
            </div>
          </div>
        )}

        <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
          💬
        </button>
      </div>
    </>
  );
}

export default CustomNavbar;