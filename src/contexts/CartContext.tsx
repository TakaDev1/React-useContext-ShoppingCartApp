import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ProductType {
  id: string;
  item: string;
}

interface CartContextType {
  cart: ProductType[];
  addItem: (item: string) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addItem = (item: string) => {
    const newProduct: ProductType = {
      id: uuidv4(),
      item: item,
    };

    setCart((prev) => [...prev, newProduct]);
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };
  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem }}>{children}</CartContext.Provider>
    </>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContextが未定義です");
  }

  return context;
};

export { CartProvider, useCart };
