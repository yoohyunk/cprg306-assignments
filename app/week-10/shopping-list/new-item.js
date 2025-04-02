"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: uuidv4(),
      name,
      quantity,
      category,
    };

    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-3 w-full bg-slate-50 text-black rounded-lg items-center"
      >
        {/* Item Name */}
        <div className="w-full">
          <label htmlFor="name" className="sr-only">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="w-full">
          <label htmlFor="category" className="sr-only">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="w-full flex flex-col">
          <label htmlFor="quantity" className="sr-only">
            Quantity
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-1 border border-gray-300 rounded text-center text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
              min="1"
              max="20"
            />
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={increment}
                className="p-1 bg-gray-200 rounded hover:bg-gray-300 text-xs"
              >
                +
              </button>
              <button
                type="button"
                onClick={decrement}
                className="p-1 bg-gray-200 rounded hover:bg-gray-300 text-xs"
              >
                -
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-1 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 text-xs"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
