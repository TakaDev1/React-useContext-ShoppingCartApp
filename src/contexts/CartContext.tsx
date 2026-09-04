import React, { createContext, useState } from "react";

interface ProductType {
  id: number;
  item: string;
}

interface CartContextType {
  cart: ProductType[];
  addItem: (product: ProductType) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addItem = (product: ProductType) => {
    return setCart((prev) => [...prev, product]);
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };
  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem }}>{children}</CartContext.Provider>
    </>
  );
};

const useCart = () => {
  const context = createContext<CartContextType | undefined>(undefined);

  if (!context) {
    throw new Error("CartContextが未定義です");
  }

  return context;
};

export { CartProvider, useCart };
