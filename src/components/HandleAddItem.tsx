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
        className="border mr-5 text-white py-1 pl-2 rounded"
      />
      <button
        onClick={() => handleSubmit(item)}
        className="w-20 h-10 rounded-full bg-gray-300 text-black hover:opacity-80 cursor-pointer"
      >
        追加
      </button>
    </div>
  );
};

export default HandleItem;
