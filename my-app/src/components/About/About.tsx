import { aboutData } from "../../aboutData";
import { SectionTitle } from "../styles/SectionHeaders.styled";
import { Section, SectionCards } from "../styles/Sections.styled";
import AboutCard from "./AboutCard";

const About = (): JSX.Element => {
  return (
    <Section id="about">
      <SectionTitle
        style={{
          color: "black",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          marginTop: "-3rem",
        }}>
        The leading fitness experts
      </SectionTitle>
      <SectionCards>
        {aboutData.map((about) => (
          <AboutCard key={about.id} {...about} />
        ))}
      </SectionCards>
    </Section>
  );
};

export default About;
