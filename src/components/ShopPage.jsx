import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";

/* IMAGES */
// id1
import bh01 from "../assets/bh01.jpg";
import bh02 from "../assets/bh02.jpg";
import bh03 from "../assets/bh03.jpg";
import bh04 from "../assets/bh04.jpg";
import bh05 from "../assets/bh05.jpg";

// id2
import bh012 from "../assets/bh012.jpg";
import bh08 from "../assets/bh08.jpg";
import bh09 from "../assets/bh09.jpg";
import bh010 from "../assets/bh010.jpg";
import bh011 from "../assets/bh011.jpg";

// id3
import bh013 from "../assets/bh013.jpg";
import bh014 from "../assets/bh014.jpg";
import bh015 from "../assets/bh015.jpg";
import bh016 from "../assets/bh016.jpg";
import bh017 from "../assets/bh017.jpg";

// id4
import bh018 from "../assets/bh018.jpg";
import bh019 from "../assets/bh019.jpg";
import bh020 from "../assets/bh020.jpg";
import bh021 from "../assets/bh021.jpg";
import bh022 from "../assets/bh022.jpg";

//id5
import bh023 from "../assets/bh023.jpg";
import bh024 from "../assets/bh024.jpg";
import bh025 from "../assets/bh025.jpg";
import bh026 from "../assets/bh026.jpg";

//id6
import bh027 from "../assets/bh027.jpg";
import bh028 from "../assets/bh028.jpg";
import bh029 from "../assets/bh029.jpg";
import bh030 from "../assets/bh030.jpg";
import bh031 from "../assets/bh031.jpg";


//id7
import sh1 from "../assets/sh1.jpg";
import sh2 from "../assets/sh2.jpg";
import sh3 from "../assets/sh3.jpg";
import sh4 from "../assets/sh4.jpg";


//id8
import sh5 from "../assets/sh5.jpg";
import sh6 from "../assets/sh6.jpg";
import sh7 from "../assets/sh7.jpg";
import sh8 from "../assets/sh8.jpg";



//id9
import sh16 from "../assets/sh16.jpg";
import sh14 from "../assets/sh14.jpg";
import sh10 from "../assets/sh10.jpg";
import sh12 from "../assets/sh12.jpg";

// id10
import te1 from "../assets/te1.jpg";
import te2 from "../assets/te2.jpg";
import te3 from "../assets/te3.jpg";
import te4 from "../assets/te4.jpg";

// id11
import te5 from "../assets/te5.jpg";
import te6 from "../assets/te6.jpg";
import te7 from "../assets/te7.jpg";

// id19
import te8 from "../assets/te8.jpg";
import te9 from "../assets/te9.jpg";
import te10 from "../assets/te10.jpg";
import te11 from "../assets/te11.jpg";
import te12 from "../assets/te12.jpg";


// id20
import te13 from "../assets/te13.jpg";
import te14 from "../assets/te14.jpg";
import te15 from "../assets/te15.jpg";
import te16 from "../assets/te16.jpg";
import te17 from "../assets/te17.jpg";

// id21
import te18 from "../assets/te18.jpg";
import te19 from "../assets/te19.jpg";
import te20 from "../assets/te20.jpg";
import te21 from "../assets/te21.jpg";
import te22 from "../assets/te22.jpg";

// id22
import te26 from "../assets/te26.jpg";
import te27 from "../assets/te27.jpg";
import te28 from "../assets/te28.jpg";
import te29 from "../assets/te29.jpg";
import te30 from "../assets/te30.jpg";


// id23
import te33 from "../assets/te33.jpg";
import te34 from "../assets/te34.jpg";


//id12
import jk1 from "../assets/jk1.jpg";
import jk2 from "../assets/jk2.jpg";
import jk3 from "../assets/jk3.jpg";
import jk4 from "../assets/jk4.jpg";
import jk5 from "../assets/jk5.jpg";


//id13
import jk6 from "../assets/jk6.jpg";
import jk7 from "../assets/jk7.jpg";
import jk8 from "../assets/jk8.jpg";
import jk9 from "../assets/jk9.jpg";



//id24
import jk10 from "../assets/jk10.jpg";
import jk11 from "../assets/jk11.jpg";
import jk12 from "../assets/jk12.jpg";
import jk13 from "../assets/jk13.jpg";
import jk14 from "../assets/jk14.jpg";

//id25
import jk15 from "../assets/jk15.jpg";
import jk16 from "../assets/jk16.jpg";
import jk17 from "../assets/jk17.jpg";
import jk18 from "../assets/jk18.jpg";

//id15
import bh43 from "../assets/bh43.jpg";
import bh44 from "../assets/bh44.jpg";
import bh45 from "../assets/bh45.jpg";

//id16
import bh46 from "../assets/bh46.jpg";
import bh47 from "../assets/bh47.jpg";
import bh48 from "../assets/bh48.jpg";
import bh49 from "../assets/bh49.jpg";
import bh50 from "../assets/bh50.jpg";


//id17
import sh17 from "../assets/sh17.jpg";
import sh18 from "../assets/sh18.jpg";
import sh19 from "../assets/sh19.jpg";

//id18
import sh21 from "../assets/sh21.jpg";
import sh22 from "../assets/sh22.jpg";
import sh23 from "../assets/sh23.jpg";


const ShopPage = () => {
  const navigate = useNavigate();

  // 🔥 FIXED ANIMATE STATE
  const [animate, setAnimate] = useState(false);

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [added, setAdded] = useState(false);

  // 🔥 IMAGE POPUP
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Straight fit Rugged Jeans",
      price: 1400,
      
      sizes: ["28", "30", "32", "34"],
      colors: ["Black"],
      image: bh01,
      gallery: [bh02, bh03, bh04, bh05],
    },
      {
      id: 2,
      name: "Premium Rugged Jeans",
      price: 1400,
      
      sizes: ["30", "32", "34"],
      colors: ["Black", "Dark Blue"],
      image: bh012,
      gallery: [bh08, bh09, bh010, bh011],
    },
      {
      id: 3,
      name: "Straight fir Jeans with piping",
      price: 1400,
      
      sizes: ["30", "32", "34"],
      colors: ["Dark Blue", "Light Blue", "Grey"],
      image: bh014,
      gallery: [bh013, bh015, bh016, bh017],
    },
      {
      id: 4,
      name: "Knew cut boot-cut Jeans",
      price: 1500,
      
      sizes: ["30", "32", "34", "36"],
      colors: ["Black"],
      image: bh018,
      gallery: [bh019, bh020, bh021, bh022],
    },
      {
      id: 5,
      name: "Linen lowers",
      price: 700,
      
      sizes: ["M", "L", "XL", "XXL"],
      colors: [
  "Jet Black",
  "Ivory",
  "Sand Beige",
  "Desert Khaki",
  "Military Olive",
  "Heather Grey"
],
      image: bh023,
      gallery: [bh024, bh025, bh026, bh024],
    },
      {
      id: 6,
      name: "Pure Linen Panted",
      price: 1000,
      
      sizes: ["M","L","XL","XXL"],
      colors: ["Heather Grey", "Pearl Grey"],
      image: bh027,
      gallery: [bh028, bh029, bh030, bh031],
    },  

    {
      id: 15,
      name: "Premium straight fit lowers",
      price: 650,
      
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Black", "Cream", "Sand", "Dark Brown", "Olive Green"],
      image: bh43,
      gallery: [bh44, bh45, bh44, bh43],
    },  

     {
      id: 16,
      name: "Premium straight fit lowers",
      price: 899,
      
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Olive Green", "Cream", "Dark Brown", "White","Black","Camel Brown"],
      image: bh46,
      gallery: [bh47, bh48, bh49, bh50],
    },  
    {
      id: 8,
      name: "shirts 1",
      price: 900,
      
      sizes: ["M", "L", "XL"],
      color: ["Black"],
      colors: ["White", "Black", "Maroon"],
      image: sh4,
      gallery: [sh1,sh2,sh3,sh4],
    },


        {
      id: 9,
      name: "shirts 2",
      price: 1200,
      
      sizes: ["S", "M", "L"],
      colors: ["Blue"],
      image: sh5,
      gallery: [sh6, sh7, sh8, sh5],
    },

    
        {
      id: 10,
      name: "shirts 3",
      price: 850,
      
      sizes: ["M", "L"],
      colors: ["Rust Brown", "Black", "Cream"],
      image: sh16,
      gallery: [sh12, sh14, sh10, sh12],
    },

    {
      id: 17,
      name: "Premium DenimPatch Shirt(Boxy/Baggy fit)",
      price: 949,
      sizes: ["M", "L" ,"XL"],
      colors: ["White"],
      image: sh17,
      gallery: [sh18, sh19, sh17, sh19],
    },

     {
      id: 18,
      name: "Zipper Shirts With Leather Coller",
      price: 1100,
           sizes: ["S", "M" ,"L", "XL","XXL"],
      colors: ["Brown", "Black", "White"],
      image: sh21,
      gallery: [sh22, sh23, sh21, sh22],
    },

     {
      id: 11,
      name: "Premuim Acid Wash t-shirts",
      price: 599,
      
      sizes: ["S","M","L","XL","XXL"],
      colors: ["Rust Brown", "Black", "Cream"],
      image: te1,
      gallery: [te2, te3, te4, te1],
    },

     {
      id: 12,
      name: "Premuim Acid Wash T-shits",
      price: 599,
      
      sizes: ["S", "M","L","XL","XXL"],
      colors: ["Rust Brown", "Black", "Cream"],
      image: te5,
      gallery: [te6, te7, te5, te6],
    },

    {
      id: 19,
      name: "Collar t-shirts ",
      price: 699,
      sizes: ["M","L","XL","XXL"],
      colors: ["Beign+Black", "Black+Green", "White+Yellow","Beign+Brown"],
      image: te8,
      gallery: [te9, te10, te11, te12],
    },

     {
      id: 20,
      name: "Premuim t-shirts",
      price: 599,
      
      sizes: ["M","L","XL","XXL"],
      colors: ["Beige", "Black", "Brown","Green","White"],
      image: te13,
      gallery: [te14, te15, te16, te17],
    },

    
     {
      id: 21,
      name: "Premium Embossed Grahic Cotton T-Shirt ",
      price: 599,
      
      sizes: ["M","L","XL","XXL"],
      colors: ["Brown", "Black", "Cream","Sea Green","Red","White"],
      image: te18,
      gallery: [te19, te20, te21, te22],
    },

     {
      id: 22,
      name: "Premium Full Sleeves Waffle T-Shirt",
      price: 999,
      sizes: ["S", "M","L","XL","XXL"],
      colors: ["Black+Beige", "Cream+Brown", "Tan+Dark Brown","Black+Khaki","Maroon+White"],
      image: te26,
      gallery: [te27, te28, te29, te30],
    },

    
     {
      id: 23,
      name: "Premium Front Print T-Shirt",
      price: 599,
      sizes: ["S", "M","L","XL","XXL"],
      colors: ["Red"],
      image: te33,
      gallery: [te34, te33, te34, te33],
    },


    
     {
      id: 13,
      name: "Premium Denim Chinese Article",
      price: 1100,
           sizes: ["S", "M","L","XL"],
      colors: ["BLUE PRINTED"],
      image: jk1,
      gallery: [jk2, jk5, jk3, jk4],
    },

    
     {
      id: 14,
      name: "Premium Denim Chinese Article",
      price: 1200,
      
      sizes: ["S", "M","L","XL"],
      colors: ["Sky blue printedn"],
      image: jk6,
      gallery: [jk7, jk8, jk9, jk6],
    },

     {
      id: 24,
      name: "Premimu Oversize Drop Zipper Shirt's(Unisex)",
      price: 1200,  
    sizes: ["M","L","XL","XXL"],
      colors: ["Blue","Black","Green"],
      image: jk10,
      gallery: [jk11, jk12, jk13, jk14],
    },

    {
      id: 25,
      name: "Imported Article",
      price: 1200,
      
    sizes: ["S", "M","L","XL"],
      colors: ["Gray"],
      image: jk15,
      gallery: [jk16, jk17, jk18, jk15],
    },
  ];

  const addToCart = (product) => {
  if (!selectedSize) {
    alert("Please select size");
    return;
  }

  if (product.colors && !selectedColor) {
    alert("Please select color");
    return;
  }

  setCart([
    ...cart,
    { ...product, selectedSize, selectedColor }
  ]);

  setAdded(true);
};

  const nextImage = () => {
    setZoom(false);
    setCurrentImgIndex(
      (prev) => (prev + 1) % selectedProduct.gallery.length
    );
  };

  const prevImage = () => {
    setZoom(false);
    setCurrentImgIndex(
      (prev) =>
        prev === 0
          ? selectedProduct.gallery.length - 1
          : prev - 1
    );
  };

  return (
    <div>
      <CustomNavbar />

      {/* 🔥 HEADER */}
      <div
        style={{
          minHeight: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg,#fff,#111,#ffe5e5)",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#ff1a1a",
            transform: animate ? "translateY(0)" : "translateY(-40px)",
            opacity: animate ? 1 : 0,
            transition: "1s",
          }}
        >
          SHOP
        </h1>
        <p style={{ color: "#333" }}>Discover Your Style</p>
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px",
          padding: "40px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setSelectedProduct(product);
              setShowModal(true);
              setSelectedSize("");
              setAdded(false);
            }}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: "red", fontWeight: "bold" }}>
              ₹{product.price}
            </p>
          </div>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      {showModal && selectedProduct && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2 style={{ textAlign: "center", color: "red" }}>
              {selectedProduct.name}
            </h2>

            {/* GALLERY */}
            <div style={galleryStyle}>
              {selectedProduct.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => {
                    setCurrentImgIndex(i);
                    setShowImagePopup(true);
                  }}
                  style={galleryImgStyle}
                />
              ))}
            </div>

            <p style={{ marginTop: "15px" }}>
              {selectedProduct.description}
            </p>

            {/* SIZE */}
            <div>
              <h4>Select Size</h4>
              {selectedProduct.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    margin: "6px",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    border: "2px solid red",
                    background: selectedSize === size ? "red" : "#fff",
                    color: selectedSize === size ? "#fff" : "#000",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

{/* COLOR (SIZE ની નીચે) */}
{selectedProduct.colors && (
  <>
    <h4 style={{ marginTop: "15px" }}>Select Color</h4>

    {selectedProduct.colors.map((color) => (
      <button
        key={color}
        onClick={() => setSelectedColor(color)}
        style={{
          margin: "6px",
          padding: "10px 20px",
          borderRadius: "25px",
          border: "2px solid red",
          background: selectedColor === color ? "red" : "#fff",
          color: selectedColor === color ? "#fff" : "#000",
        }}
      >
        {color}
      </button>
    ))}
  </>
)}
            {!added ? (
              <button onClick={() => addToCart(selectedProduct)} style={addBtn}>
                Add To Cart 🔥
              </button>
            ) : (
              <button
                onClick={() => navigate("/order", { state: { cart } })}
                style={{ ...addBtn, background: "green" }}
              >
                Go To Cart 🛒
              </button>
            )}

            <button onClick={() => setShowModal(false)} style={closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🔥 IMAGE POPUP WITH ZOOM */}
      {showImagePopup && selectedProduct && (
        <div style={overlayStyle}>
          <div style={imagePopupStyle}>
            <span onClick={prevImage} style={arrowLeft}>❮</span>

            <img
              src={selectedProduct.gallery[currentImgIndex]}
              alt=""
              onClick={() => setZoom(!zoom)}
              style={{
                ...popupImgStyle,
                transform: zoom ? "scale(1.8)" : "scale(1)",
                cursor: zoom ? "zoom-out" : "zoom-in",
              }}
            />

            <span onClick={nextImage} style={arrowRight}>❯</span>

            <button onClick={() => setShowImagePopup(false)} style={popupClose}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* STYLES */
const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  width: "95%",
  maxWidth: "900px",
  maxHeight: "90vh",
  overflowY: "auto",
};

const galleryStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(150px,2fr))",
  gap: "15px",
  marginTop: "20px",
};

const galleryImgStyle = {
  width: "100%",
  height: "360px",
  objectFit: "cover",
  borderRadius: "15px",
  cursor: "pointer",
};

const imagePopupStyle = {
  position: "relative",
  width: "90%",
  maxWidth: "800px",
};

const popupImgStyle = {
  width: "100%",
  borderRadius: "15px",
  transition: "0.4s ease",
};

const arrowLeft = {
  position: "absolute",
  left: "-40px",
  top: "50%",
  fontSize: "40px",
  color: "#fff",
  cursor: "pointer",
};

const arrowRight = {
  position: "absolute",
  right: "-40px",
  top: "50%",
  fontSize: "40px",
  color: "#fff",
  cursor: "pointer",
};

const popupClose = {
  position: "absolute",
  top: "-40px",
  right: "0",
  fontSize: "28px",
  background: "none",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const addBtn = {
  marginTop: "20px",
  width: "100%",
  padding: "14px",
  borderRadius: "30px",
  background: "linear-gradient(45deg, red, black)",
  color: "#fff",
  border: "none",
};

const closeBtn = {
  marginTop: "20px",
  width: "100%",
  padding: "14px",
  borderRadius: "30px",
  background: "linear-gradient(45deg, red, black)",
  color: "#fff",
  border: "none",
};

export default ShopPage;