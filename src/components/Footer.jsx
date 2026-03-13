import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="lucifer-footer">
      <Container>
        <Row className="gy-5">

          {/* LOGO / ABOUT */}
          <Col md={4} className="lucifer-animate">
            <h2 className="lucifer-logo">LUCIFUR</h2>
            <p className="lucifer-text">
              Fashion born from darkness. <br />
              Power • Desire • Confidence
            </p>
          </Col>

          {/* EXPLORE */}
          <Col md={4} className="lucifer-animate delay-1">
            <h4 className="lucifer-title">Explore</h4>
            <ul className="lucifer-links">
              <li>Home</li>
              <li>Shop</li>
              <li>New Arrivals</li>
              <li>Collections</li>
              <li>About</li>
              <li>Lookbook</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* CONTACT (ADDED) */}
          <Col md={4} className="lucifer-animate delay-2">
            <h4 className="lucifer-title">Contact</h4>

            <p className="lucifer-address">
            KK heights building,1sr floor,behind bhadada bagh,mochi market,bhilwara(RAJASTHAN)
            </p>

            <h3 className="lucifer-phone">
              <FaPhoneAlt />+91 7412838671
            </h3>

            <p className="lucifer-insta">
              @lucifur.clothing
            </p>

           <div className="lucifer-social">
  <a
    href="https://www.instagram.com/lucifur.clothng?igsh=dTFncnAweTh2dG15"
    target="_blank"
    rel="noopener noreferrer"
    className="insta-click"
  >
    <FaInstagram />
  </a>

  
</div>

          </Col>

        </Row>

        <div className="lucifer-bottom">
          © 2026 <span>NIYEXAwebstudio</span> | All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

export default Footer;