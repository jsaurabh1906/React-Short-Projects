import React from "react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>Scss Demo</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default Navbar;
