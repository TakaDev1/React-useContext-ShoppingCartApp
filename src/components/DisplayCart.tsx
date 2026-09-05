import React from "react";
import { useCart } from "../contexts/CartContext";

const DisplayCart = () => {
  const { cart, removeItem } = useCart();

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <li key={product.id} className="text-white mx-auto list-none py-2">
              <span className="border inline-block w-20">{product.item}</span>{" "}
              <button
                onClick={() => removeItem(product.id)}
                className="border w-10 rounded-full hover:opacity-70 cursor-pointer bg-red-400 text-black p-1"
              >
                ×
              </button>{" "}
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
