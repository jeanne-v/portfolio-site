import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export default function ProjectCard({ title, description, url, tags }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.tags}>
        {tags.map((tag, index) => {
          return (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          );
        })}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <a className={styles.link} target="_blank" href={url}>
        See on GitHub
      </a>
    </div>
  );
}
