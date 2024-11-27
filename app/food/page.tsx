"use client";

import React, { useState, useEffect } from "react";
import styles from "../page.module.scss";
import { Handlee } from "next/font/google";
import Link from "next/link";

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
});

const Landing = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((result) => setData(result.categories))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((food) =>
    food.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles["food-area-nav"]}>
        <h1>Menu</h1>
        <Link href="/">
          <h1 className={styles["food-details-home"]}>Go Back Home</h1>
        </Link>
      </div>
      <div className={styles["food-area"]}>
        <div className={styles["search-bar"]}>
          <input
            type="text"
            placeholder="Search food category..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles["search-input"]}
          />
        </div>
        <div className={styles["food-area-title"]}>
          <span>Beef</span>
          <span>Chicken</span>
          <span>Dessert</span>
          <span>Lamb</span>
          <span>Miscellaneous</span>
          <span>Pasta</span>
          <span>Pork</span>
          <span>Seafood</span>
          <span>Side</span>
          <span>Starter</span>
          <span>Vegan</span>
          <span>Vegetarian</span>
          <span>Breakfast</span>
          <span>Goat</span>
        </div>
        <div className={styles["food-area-table-container"]}>
          {" "}
          {filteredData.length > 0 ? (
            filteredData.map((food) => (
              <div key={food.idCategory} className={styles["food-area-table"]}>
                <span className={styles["food-area-meal"]}>
                  {food.strCategory}
                </span>
                <img src={food.strCategoryThumb} alt="Food image" />
                <span>{food.strCategoryDescription}</span>
              </div>
            ))
          ) : (
            <div className={styles["no-results"]}>
              <p>Category missing</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
