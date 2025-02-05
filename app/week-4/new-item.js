"use client";
import { useState } from "react";

export function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const increment = () => (quantity < 20 ? setQuantity(quantity + 1) : null);
  const decrement = () => (quantity > 1 ? setQuantity(quantity - 1) : null);
  return (
    <div className="flex flex-row gap-2 bg-slate-50 p-2 rounded-lg items-center">
      <div className="px-2 text-gray-500">{quantity}</div>
      <div className="flex flex-row gap-2">
        <button
          onClick={increment}
          className="rounded-md bg-gray-500 w-8 py-1 text-center hover:bg-gray-600"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="rounded-md bg-gray-500 w-8 py-1 text-center  hover:bg-gray-600"
        >
          -
        </button>
      </div>
    </div>
  );
}
