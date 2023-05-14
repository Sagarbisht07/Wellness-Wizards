
import { Section } from '../styles/Sections.styled';
import { Benefit, BenefitsDetails, BenefitsImage, BenefitsImageContainer, BenefitsImg, BenefitsList, BenefitsLists, SectionBenefits } from '../styles/Benefits.styled';
import { SectionDescription, SectionTitle } from '../styles/SectionHeaders.styled';
import { benefitsData } from '../../benefitsData';
import { CheckIcon } from '@chakra-ui/icons';
import BenefitImg from '../../assets/benefits-img.png';


const Benefits = (): JSX.Element => {
    return (
      <Section>
        <SectionBenefits>
          <BenefitsDetails>
            <SectionTitle textDefault={true}
            className='text-black'
            >the benefits</SectionTitle>
            <SectionDescription textDefault={true}>
              Our specialists are very prepared and fit the bill to furnish you
              with shape centered alterations that will push you as far as
              possible without bargaining your security.
            </SectionDescription>
            <BenefitsLists   className='text-black'>
              {benefitsData.map((benefit) => {
                return (
                  <BenefitsList key={benefit.id}>
                    <CheckIcon />
                    <Benefit>{benefit.benefit} </Benefit>
                  </BenefitsList>
                );
              })}
            </BenefitsLists>
          </BenefitsDetails>
          <BenefitsImageContainer>
            <BenefitsImage>
              <BenefitsImg src={BenefitImg} alt='benefit image' />
            </BenefitsImage>
          </BenefitsImageContainer>
        </SectionBenefits>
      </Section>
    );
  };
  
  export default Benefits;
  