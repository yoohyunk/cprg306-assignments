"use client";

import { ItemList } from "./item-list";
import { MealIdeas } from "./meal-ideas";
import itemsData from "./items.json";
import { NewItem } from "./new-item";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .split(" ")[0]
      .replace(/[^a-zA-Z]/g, "");

    console.log(`Selected ingredient: ${cleanedName}`);
    setSelectedItemName(cleanedName.toLowerCase());
  };

  return (
    <div className="flex flex-row justify-start items-start min-h-screen px-2 py-4 gap-6">
      <div className="fixed left-0 top-0 h-screen shadow-lg flex flex-col gap-4 w-1/3 p-2 items-center">
        <h1 className="text-2xl text-rose-400 font-bold text-center">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />

        <div className="flex-1 w-full overflow-auto">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>

      <div className="ml-[33.33%] w-2/3">
        {selectedItemName && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">
              Meal Ideas for: {selectedItemName}
            </h2>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        )}
      </div>
    </div>
  );
}
