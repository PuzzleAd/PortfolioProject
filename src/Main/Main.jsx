import React from "react";
import styles from "./Main.module.scss";

const Main = ({ isDark }) => {
  return (
    <div className={isDark ? styles.dark : styles.light}>
      <div className={styles.box}>
        <h1>Hi, I am</h1>
        <h1>Chukwukwe Chisom</h1>
        <p>Frontend Developer</p>
        <button>Download CV</button>
        <div className={styles.apps}>
          <img src="./TwitterIcon.svg" alt="" />
          <img src="./Whatsapp.svg" alt="" />
          <img src="./Facebook.svg" alt="" />
          <img src="./Instagram.svg" alt="" />
          <img src="./LinkedIn.svg" alt="" />
        </div>
      </div>
      <div className={styles.manBox}>
        <img src="./ManImage.svg" alt="" />
      </div>
    </div>
  );
};

export default Main;
