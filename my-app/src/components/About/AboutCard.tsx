import { HiOutlineArrowNarrowRight as Arrow } from "react-icons/hi";
import { TAboutData } from "../../aboutData";
import { StyledCard } from "../styles/Card.styled";
import { CardImage } from "../styles/Card.styled";
import { CardDetails } from "../styles/Card.styled";
import { SubTitle } from "../styles/Card.styled";
import { SectionCardTitle } from "../styles/Card.styled";
import { SectionCardDetails } from "../styles/Card.styled";
import { SectionLink } from "../styles/Card.styled";
import { CardImg } from "../styles/Card.styled";

export const AboutCard = ({
  img,
  title,
  subTitle,
  details,
  imgStart,
}: TAboutData): JSX.Element => {
  return (
    <StyledCard imgStart={imgStart}>
      <CardImage imgStart={imgStart}>
        <CardImg src={img} alt={title} />
      </CardImage>
      <CardDetails>
        <SubTitle
          style={{
            color: "black",
            fontSize: "1rem",
          
          }}>
          {subTitle}
        </SubTitle>
        <SectionCardTitle
          style={{
            color: "black",
          }}>
          {title}
        </SectionCardTitle>
        <SectionCardDetails
          style={{
            color: "black",
          }}>
          {details}
        </SectionCardDetails>
        <SectionLink
          style={{
            color: "black",
          }}>
          Learn More <Arrow />
        </SectionLink>
      </CardDetails>
    </StyledCard>
  );
};

export default AboutCard;
