import { useState, useEffect } from "react";

import styles from "./Header.module.css";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${hasScrolled ? styles["has-scrolled"] : ""}`}>
      <a className={styles["home-link"]} href="/">
        Jeanne Viallard
      </a>
      <nav className={styles.nav}>
        <a className={styles["section-link"]} href="/#projects">
          Projects
        </a>
        <a className={styles["section-link"]} href="/#links">
          Links
        </a>
      </nav>
    </header>
  );
}
