"use client";

import React, { useState } from "react";
import styles from "../page.module.scss";
import Link from "next/link";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
});

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Clicked");
  };

  return (
    <div className={styles.page}>
      <div className={styles["body-div"]}>
        <nav className={styles["nav-bar"]}>
          <div>
            <h1 className={handlee.className}>GEHRICTH</h1>
          </div>
          <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
            <div className={styles["bar"]}></div>
            <div className={styles["bar"]}></div>
            <div className={styles["bar"]}></div>
          </div>
          <div
            className={`${styles["menu-links"]} ${
              isMenuOpen ? styles["menu-active"] : ""
            }`}
          >
            <ul className={handlee.className}>
              <li>Home</li>
              <Link className={styles["link-com"]} href="/food">
                <li>Food</li>
              </Link>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Landing</li>
            </ul>
          </div>
          <div className={styles["login-btn"]}>
            <p className={handlee.className}>Login/Registration</p>
            <p className={styles["separator"]}>|</p>
            <p className={handlee.className}>Book Table</p>
          </div>
        </nav>
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
              <Link href="/food" className={styles["explore-menu"]}>Explore Menu</Link>
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
