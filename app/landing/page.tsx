"use client";

import React from "react";
import styles from "../page.module.scss"
import Link from "next/link";
import { Handlee } from "next/font/google";
import Navbar from "../Navbar";

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
});

const Landing = () => {
  return (
    <div className={styles.page}>
      <div className={styles["body-div"]}>
        <Navbar />  
        <div className={styles["hero-area"]}>
          <div className={styles["hero-area-text"]}>
            <h5>Chase The New Flavour</h5>
            <h1 className={handlee.className}>
              The Key To<br></br> Fine Dining
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              obcaecati laborum iusto quam necessitatibus eaque qui dolore unde
              ad rem quasi tempora vero, voluptatem nobis doloremque deleniti
              temporibus dignissimos minus.
            </p>{" "}
            <button className={handlee.className}>
              {" "}
              <Link href="/food" className={styles["explore-menu"]}>
                Explore Menu
              </Link>
            </button>
          </div>
          <div className={styles["hero-area-pic-container"]}>
            <img
              src="/hero.png"
              alt="Hero Image"
              className={styles["hero-area-pic"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;