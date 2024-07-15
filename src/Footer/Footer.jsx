import React from "react"
import styles from "./Footer.module.scss"
import Data from "../Data"


const Footer = ({isDark}) => {

    return (
        <div className={isDark ? styles.dark : styles.light}>
            <div className={styles.cardBox}>
                {Data.map((element, index) => (
                    <div className={styles.card} key={index}>
                        <img src={element.imageUrl} alt="" />
                        <div>{element.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Footer