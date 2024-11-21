"use client";

import React, { useState, useEffect } from "react";
import styles from "../page.module.scss";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
});

const Landing = () => {
  const [data, setData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((result) => setData(result.categories))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  function handleClick(idCategory) {
    setSelectedCategoryId((prevId) =>
      prevId === idCategory ? null : idCategory
    );
  }
  return (
    <div className={styles["food-area"]}>
      <div className={styles["food-area-title"]}>
        <span id={selectedCategoryId}>Beef</span>
        <span id={selectedCategoryId}>Chicken</span>
        <span id={selectedCategoryId}>Dessert</span>
        <span id={selectedCategoryId}>Lamb</span>
        <span id={selectedCategoryId}>Miscellaneous</span>
        <span id={selectedCategoryId}>Pasta</span>
        <span id={selectedCategoryId}>Pork</span>
        <span id={selectedCategoryId}>Seafood</span>
        <span id={selectedCategoryId}>Side</span>
        <span id={selectedCategoryId}>Starter</span>
        <span id={selectedCategoryId}>Vegan</span>
        <span id={selectedCategoryId}>Vegetarian</span>
        <span id={selectedCategoryId}>Breakfast</span>
        <span id={selectedCategoryId}>Goat</span>
      </div>
      {data.map((food) => (
    
        <div key={food.idCategory} className={styles["food-area-table"]}>
          <span className={styles["food-area-meal"]}>{food.strCategory}</span>
          <img src={food.strCategoryThumb} alt="Food image" />
          <span>{food.strCategoryDescription}</span>
        </div>
      ))}
    </div>
  );
};

export default Landing;

// <div className={handlee.className}>
//      <div className={styles["food-area"]}>
//      {data.map((food) => (
//       <div className={styles["food-area-table"]} key={food.idCategory}>
//         <div
//           onClick={() => {
//             handleClick(food.idCategory);
//           }}
//           className={styles["food-area-cate"]}
//         >
//          {food.strCategory}
//        </div>
//
//        {/* {selectedCategoryId === food.idCategory && ( */}
//          <div>
//            <img src={food.strCategoryThumb} />
//            <div>{food.strCategoryDescription}</div>
//          </div>
//        {/* )} */}
//      </div>
//    ))}
//  </div>
// </div>
