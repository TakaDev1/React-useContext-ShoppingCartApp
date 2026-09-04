import React from "react";
import { useCart } from "../contexts/CartContext";

const DisplayCart = () => {
  const { cart, removeItem } = useCart();

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <li key={product.id}>
              {product.item} <button onClick={() => removeItem(product.id)}>×</button>{" "}
            </li>
          ))}
        </div>
      ) : (
        <p>カートが空です</p>
      )}
    </div>
  );
};

export default DisplayCart;
