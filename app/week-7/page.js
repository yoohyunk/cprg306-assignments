"use client";
import { ItemList } from "./item-list";
import itemsData from "./items.json";
import { NewItem } from "./new-item";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  return (
    <div className="flex flex-row justify-start items-center min-h-screen py-4 gap-6 ">
      <div className="flex flex-col gap-4 w-1/3 p-4 items-center">
        <h1 className="text-2xl text-rose-400 font-bold text-center ">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </div>
  );
}
