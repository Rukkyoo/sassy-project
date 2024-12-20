"use client";

import styles from "../page.module.scss";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Details = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((result) => setData(result.meals))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div className={styles["food-details-container"]}>
      <div className={styles["food-details-nav"]}>
        <h1>Meal Details</h1>
        <Link href="/">
          <h1>Go Back Home</h1>
        </Link>
      </div>

      {data.map((meals) => {
        return (
          <div className={styles["food-details-container"]} key={meals.idMeal}>
            <div className={styles["food-image-container"]}>
              {" "}
              <img
                className={styles["food-image"]}
                src={meals.strMealThumb}
                alt={`Picture of ${meals.strMeal}`}
              />
            </div>

            <span>Meal: {meals.strMeal}</span>
            <span>Category: {meals.strCategory}</span>
            <span>Area: {meals.strArea}</span>
            <span>
              <a href={meals.strYoutube} target="blank">
                Link to video
              </a>
            </span>
            <div className={styles["food-details-ingredients"]}>
              <h3>Ingredients</h3>
              <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                  .map((i) => {
                    const ingredient = meals[`strIngredient${i}`];
                    const measure = meals[`strMeasure${i}`];
                    if (ingredient && ingredient.trim()) {
                      return (
                        <li key={i}>
                          {ingredient} {measure && `- ${measure}`}
                        </li>
                      );
                    }
                    return null;
                  })
                  .filter(Boolean)}
              </ul>
              <h3>Instructions</h3>
              <p>{meals.strInstructions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
