"use client";
import { useState } from "react";

export function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setname] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => (quantity < 20 ? setQuantity(quantity + 1) : null);
  const decrement = () => (quantity > 1 ? setQuantity(quantity - 1) : null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      Name: name,
      Quantity: quantity,
      Category: category,
    };

    console.log(item);
    alert(`Added ${quantity} ${name} to the ${category} category`);

    setname("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-slate-50 text-black rounded-lg"
    >
      <h1 className="text-2xl text-center font-bold">Add New Item</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        required
        className="p-2 border-2 rounded-lg"
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={handleCategoryChange}
        required
        className="p-2 border-2 rounded-lg"
        // "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"
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
      <label
        htmlFor="quantity"
        className="flex flex-row gap-2 bg-slate-50 p-2 rounded-lg items-center border-2"
      >
        <input
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="px-2 text-gray-500"
        />
        <div className="flex flex-row gap-2">
          <button
            type="button"
            onClick={increment}
            className="rounded-md bg-gray-500 w-8 py-1 text-center hover:bg-gray-600"
          >
            +
          </button>
          <button
            type="button"
            onClick={decrement}
            className="rounded-md bg-gray-500 w-8 py-1 text-center  hover:bg-gray-600"
          >
            -
          </button>
        </div>
      </label>

      <button type="submit" className="bg-gray-500 rounded-lg p-2 font-bold">
        Submit
      </button>
    </form>
  );
}
