import { programData } from "../../programData";
import { SectionDescription, SectionTitle } from "../styles/SectionHeaders.styled";
import { Section, SectionCards } from "../styles/Sections.styled";
import ProgramCard from "./ProgramCard";


const Program = (): JSX.Element => {
    return (
        <Section id='programs'>
          <SectionTitle
          style={{
            color: 'black',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            marginTop: '-1rem',

          }}
          >our training programs</SectionTitle>
          <SectionDescription>
            {' '}
            Our specialists are very prepared and fit the bill to furnish you with
            shape centered alterations that will push you as far as possible without
            bargaining your security.
          </SectionDescription>
          <SectionCards>
            {programData.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </SectionCards>
        </Section>
      );
    };
    
    export default Program;
    