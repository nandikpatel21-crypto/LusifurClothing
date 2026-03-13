
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./components/ShopPage";
import OrderPage from "./components/OrderPage";
import CustomNavbar from "./components/CustomNavbar";
import HeroSection from "./components/HeroSection";
import NewArrivalsPage from "./components/NewArrivalsPage";
import AboutPage from "./components/AboutPage";
import LookbookPage from "./components/LookbookPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* ✅ Navbar MUST be inside Router */}
      <CustomNavbar />
      

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/new" element={<NewArrivalsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lookbook" element={<LookbookPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
