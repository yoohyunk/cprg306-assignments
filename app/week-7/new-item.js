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
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 w-full bg-slate-50 text-black rounded-lg items-center"
      >
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border-2 rounded-lg w-full"
        />

        <div className="flex flex-row gap-2 w-full justify-between items-center">
          <label htmlFor="category" className="w-1/2">
            <select
              id="category"
              placeholder="Select category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="p-2 border-2 rounded-lg w-full"
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
          </label>

          <label htmlFor="quantity" className="w-1/2">
            <div className="flex flex-row gap-2 p-2 rounded-lg items-center border-2 w-full">
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className=" text-gray-500 w-full h-5"
                min="1"
                max="20"
              />
              <div className="flex flex-row gap-2 items-center">
                <button
                  type="button"
                  onClick={increment}
                  className="flex items-center justify-center rounded-md bg-gray-500 w-5 h-5 text-center hover:bg-gray-600"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={decrement}
                  className="flex items-center justify-center rounded-md bg-gray-500 w-5 h-5 text-center hover:bg-gray-600"
                >
                  -
                </button>
              </div>
            </div>
          </label>
        </div>

        <button
          type="submit"
          className="bg-gray-500 rounded-lg p-2 font-bold w-full"
        >
          +
        </button>
      </form>
    </div>
  );
}
