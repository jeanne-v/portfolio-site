import ContentSection from "../ContentSection/ContentSection";
import ButtonLink from "../ButtonLink/ButtonLink";
import useScrollStatus from "../../hooks/useScrollStatus";

import linkedInIcon from "../../assets/linkedin-icon-white.svg";
import gitHubIcon from "../../assets/github-icon-purple.svg";

import styles from "./LinksSection.module.css";

export default function LinksSection() {
  const { hasBeenScrolledIntoView, elementRef } = useScrollStatus<HTMLDivElement>();
  return (
    <ContentSection style={{ backgroundColor: "var(--secondary-bg-color)" }} id="links">
      <ContentSection.Title>Links</ContentSection.Title>
      <ContentSection.SubTitle>Places where you can find me:</ContentSection.SubTitle>
      <div
        ref={elementRef}
        className={`${styles.links} ${hasBeenScrolledIntoView ? styles.active : ""}`}
      >
        <ButtonLink
          text="LinkedIn"
          url="https://www.linkedin.com/in/jeanne-viallard-8090b5251/"
          variant="primary"
          icon={linkedInIcon}
        />
        <ButtonLink
          text="Github"
          url="https://github.com/jeanne-v"
          variant="secondary"
          icon={gitHubIcon}
        />
      </div>
    </ContentSection>
  );
}
