"use client";
import { useState, useEffect } from "react";

export function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const loadMealIdeas = async () => {
      if (!ingredient) return; // Prevent API calls with an empty ingredient

      try {
        const data = await fetchMealData(ingredient);
        console.log(data);
        setMeals(data);
      } catch (error) {
        console.error("Error loading meal ideas:", error);
      }
    };

    loadMealIdeas();
  }, [ingredient]);
  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-slate-50 text-black rounded-lg items-center">
      <h2 className="text-2xl font-bold text-center">Meal Ideas</h2>
      {meals.map((meal) => (
        <div key={meal.idMeal} className="flex flex-col gap-2 w-full">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-lg w-full"
          />
          <h3 className="text-lg font-bold">{meal.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}

const fetchMealData = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch meal data");
    }

    const data = await response.json();
    console.log(data);
    return data.meals || []; // Return an empty array if no meals are found
  } catch (error) {
    console.error("Error fetching meal data:", error);
    return [];
  }
};
