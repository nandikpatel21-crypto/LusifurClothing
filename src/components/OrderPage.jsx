import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );
const handleOrder = () => {
  const message = `
🔥 NEW ORDER 🔥

${cart
  .map(
    (item, i) =>
      `${i + 1}. ${item.name}
Size: ${item.selectedSize}
Color: ${item.selectedColor || "N/A"}
Price: ₹${item.price}
`
  )
  .join("\n")}

Total: ₹${total}
Delivery Location:
Name:
Payment Screen short add:
`;

  const whatsappURL = `https://wa.me/7412838671?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};
  return (
    <div style={{ padding: "40px" }}>
      <h2>Confirm Your Order</h2>

      {cart.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
            marginBottom: "10px",
            background: "#f8f8f8",
            borderRadius: "10px",
          }}
        >
          <span>
            {item.name} ({item.selectedSize})
          </span>
          <span>₹{item.price}</span>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button
        onClick={handleOrder}
        style={{
          marginTop: "20px",
          padding: "15px",
          width: "100%",
          borderRadius: "30px",
          background: "green",
          color: "#fff",
          border: "none",
        }}
      >
        Confirm & Order on WhatsApp
      </button>

      <button
        onClick={() => navigate("/shop")}
        style={{
           marginTop: "20px",
          padding: "15px",
          width: "100%",
          borderRadius: "30px",
          background: "green",
          color: "#fff",
          border: "none",
        }}
      >
        Back to Shop
      </button>
    </div>
  );
}

export default OrderPage;