import { Link } from "react-router-dom";
import { TProgramData } from "../../programData";
import { StyledButton } from "../styles/Button.styled";
import {
  CardDetails,
  CardImage,
  CardImg,
  SectionCardDetails,
  SectionCardTitle,
  StyledCard,
} from "../styles/Card.styled";
import { BsFillPlayCircleFill as PlayIcon } from "react-icons/bs";

const ProgramCard = ({
  img,
  title,
  details,
  imgStart,
  line,
}: TProgramData): JSX.Element => {
  return (
    <StyledCard imgStart={imgStart}>
      <CardImage imgStart={imgStart} line={line}>
        <CardImg src={img} alt={title} />
      </CardImage>
      <CardDetails>
        <SectionCardTitle
          style={{
            color: "black",
          }}>
          {title}
        </SectionCardTitle>
        <SectionCardDetails>{details}</SectionCardDetails>
        <StyledButton>
          <Link to="https://youtu.be/qO19Pv36o3U">Learn More</Link>
          <PlayIcon />
        </StyledButton>
      </CardDetails>
    </StyledCard>
  );
};

export default ProgramCard;
