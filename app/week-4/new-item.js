"use client";
import { useState } from "react";

export function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);
  return (
    <div className="flex flex-row gap-2 bg-slate-50 p-2 rounded-lg items-center">
      <div className="px-2 text-gray-500">{quantity}</div>
      <div className="flex flex-row gap-2">
        <button
          onClick={increment}
          disabled={quantity >= 20}
          className="rounded-md bg-gray-500 w-8 py-1 text-center hover:bg-gray-600 disabled:hover:bg-gray-500"
        >
          +
        </button>
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          className="rounded-md bg-gray-500 w-8 py-1 text-center  hover:bg-gray-600 disabled:hover:bg-gray-500"
        >
          -
        </button>
      </div>
    </div>
  );
}
