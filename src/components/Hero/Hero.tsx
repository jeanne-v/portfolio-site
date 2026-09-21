import innerStar from "../../assets/inner-star-white.svg";
import starsCircle from "../../assets/stars-circle-white.svg";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles["logo-container"]}>
          <img className={styles["stars-circle"]} src={starsCircle} alt="" />
          <img className={styles["inner-star"]} src={innerStar} alt="" />
        </div>
        <h1 className={styles.title}>Jeanne Viallard</h1>
        <h2 className={styles["sub-title"]}>Front-end developer</h2>
      </div>
    </div>
  );
}
