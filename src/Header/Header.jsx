import React from "react";
import styles from "./Header.module.scss";

const Header = ({isDark , setIsDark}) => {
  let NaviArray = ["Home", "About", "Services", "Project", "Content"];

  return (
    <div className={isDark ? styles.dark : styles.light}>
      <ul>
        {NaviArray.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <img src={isDark ? "./LightModeIcon.svg" : "./DarkModeIcon.svg"} alt="LightMode"  onClick={() => setIsDark((prev) => !prev)}/>
    </div>
  );
};

export default Header;
