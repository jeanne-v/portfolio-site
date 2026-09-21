import ContentSection from "../ContentSection/ContentSection";
import ButtonLink from "../ButtonLink/ButtonLink";

import linkedInIcon from "../../assets/linkedin-icon-white.svg";
import gitHubIcon from "../../assets/github-icon-purple.svg";

import styles from "./LinksSection.module.css";

export default function LinksSection() {
  return (
    <ContentSection style={{ backgroundColor: "var(--secondary-bg-color)" }} id="links">
      <ContentSection.Title>Links</ContentSection.Title>
      <ContentSection.SubTitle>Places where you can find me:</ContentSection.SubTitle>
      <div className={styles.links}>
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
