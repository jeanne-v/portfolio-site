import styles from "./Footer.module.css";
import starLogo from "../../assets/star-dark-purple.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img className={styles.logo} src={starLogo} alt="" />
        <p className={styles.legal}>© 2026 Jeanne Viallard. All rights reserved</p>
      </div>
    </footer>
  );
}
