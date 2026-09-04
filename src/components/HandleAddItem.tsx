import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const HandleItem = () => {
  const [item, setItem] = useState<string>("");
  const { addItem } = useCart();
  const handleSubmit = (item: string) => {
    if (!item.trim()) return;

    addItem(item);
    setItem("");
  };
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setItem(event.target.value)}
        placeholder="アイテムを入力"
      />
      <button onClick={() => handleSubmit(item)}>追加</button>
    </div>
  );
};

export default HandleItem;
