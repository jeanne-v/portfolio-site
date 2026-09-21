import ContentSection from "../ContentSection/ContentSection";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/projects";
import useScrollStatus from "../../hooks/useScrollStatus";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const { hasBeenScrolledIntoView, elementRef } = useScrollStatus<HTMLDivElement>();
  return (
    <ContentSection id="projects">
      <ContentSection.Title>Projects</ContentSection.Title>
      <ContentSection.SubTitle>
        Here are some of my latest projects:
      </ContentSection.SubTitle>
      <div
        ref={elementRef}
        className={`${styles.projects} ${hasBeenScrolledIntoView ? styles.active : ""}`}
      >
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
