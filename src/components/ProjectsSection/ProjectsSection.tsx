import ContentSection from "../ContentSection/ContentSection";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/projects";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <ContentSection>
      <ContentSection.Title>Projects</ContentSection.Title>
      <ContentSection.SubTitle>
        Here are some of my latest projects:
      </ContentSection.SubTitle>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
              tags={project.tags}
            />
          );
        })}
      </div>
    </ContentSection>
  );
}
