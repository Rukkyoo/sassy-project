"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Handlee } from "next/font/google";
import styles from "../app/page.module.scss"

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
        <button className={styles["close-menu"]} onClick={toggleMenu}>
          &times;
        </button>
        <ul className={handlee.className}>
          <li>Home</li>
          <Link className={styles["link-com"]} href="/food">
            <li>Food</li>
          </Link>
          <li>Contact Us</li>
          <li>Blog</li>
          <Link className={styles["link-com"]} href="/details">
            <li>Meal Details</li>
          </Link>
        </ul>
      </div>
      <div className={styles["login-btn"]}>
        <p className={handlee.className}>Login/Registration</p>
        <p className={styles["separator"]}>|</p>
        <p className={handlee.className}>Book Table</p>
      </div>
    </nav>
  );
};

export default Navbar;