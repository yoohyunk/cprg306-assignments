"use client";

import { Item } from "./item";
import { useState } from "react";
import items from "./items.json";

export function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-1 justify-end px-4">
        <button
          onClick={() => setSortBy("name")}
          className={`${
            sortBy === "name" ? "bg-blue-500" : "bg-slate-500"
          } text-xs p-1 rounded-md`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("quantity")}
          className={`${
            sortBy === "quantity" ? "bg-blue-500" : "bg-slate-500"
          } text-xs p-1 rounded-md`}
        >
          Sort by Quantity
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${
            sortBy === "category" ? "bg-blue-500" : "bg-slate-500"
          } text-xs p-1 rounded-md`}
        >
          Sort by Category
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {items
          .sort((a, b) => {
            if (sortBy === "name") {
              return a.name.localeCompare(b.name);
            } else if (sortBy === "quantity") {
              return a.quantity - b.quantity;
            } else {
              return a.category.localeCompare(b.category);
            }
          })
          .map((item) => (
            <Item
              key={item.id}
              name={item.name}
              category={item.category}
              quantity={item.quantity}
            />
          ))}
      </div>
    </div>
  );
}
