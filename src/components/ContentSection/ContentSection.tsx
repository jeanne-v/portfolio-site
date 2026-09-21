import styles from "./ContentSection.module.css";

interface ContentSectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

function ContentSection({ children, style, id }: ContentSectionProps) {
  return (
    <section id={id} className={styles.section} style={style}>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

interface ContentSectionTitleProps {
  children: React.ReactNode;
}

function ContentSectionTitle({ children }: ContentSectionTitleProps) {
  return <h2 className={styles.title}>{children}</h2>;
}

interface ContentSectionSubTitleProps {
  children: React.ReactNode;
}

function ContentSectionSubTitle({ children }: ContentSectionSubTitleProps) {
  return <p className={styles["sub-title"]}>{children}</p>;
}

ContentSection.Title = ContentSectionTitle;
ContentSection.SubTitle = ContentSectionSubTitle;
export default ContentSection;
