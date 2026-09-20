import styles from "./ButtonLink.module.css";

interface ButtonLinkProps {
  text: string;
  url: string;
  variant: "primary" | "secondary";
  icon?: string;
}

export default function ButtonLink({ text, url, variant, icon }: ButtonLinkProps) {
  return (
    <a href={url} className={`${styles.link} ${styles[variant]}`}>
      {icon ? <img className={styles.icon} src={icon} alt="" /> : ""}
      {text}
    </a>
  );
}
