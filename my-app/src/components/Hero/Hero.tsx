
import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from 'react-icons/bs';
import { HeroImage, MainButtons, MainDescription, MainDetails, MainHero, MainImage, MainTitleLine, MainTitlte } from '../styles/Hero.styled';
import { StyledButton } from '../styles/Button.styled';

const Hero = (): JSX.Element => {
  return (
    <MainHero>
    {/* Good health starts with what you eat. */}
    <MainDetails
      style={{
        marginLeft: "5rem",
      }}>
      <MainTitlte
        style={{
          color: "black",
        }}>
        Good health{" "}
        <MainTitleLine>
          starts <br />
          with what you eat.{" "}
        </MainTitleLine>{" "}
        <br />
      </MainTitlte>
      <MainDescription>
        Want to eat more mindfully? Track meals, learn about your habits, and
        reach your goals with MyFitnessPal.
      </MainDescription>
      <MainButtons>
        <StyledButton primary={true}>
          Get Started <ArrowIcon />
        </StyledButton>
        <StyledButton>
          Learn More <PlayIcon />{" "}
        </StyledButton>
      </MainButtons>
    </MainDetails>

    <MainImage>
      <HeroImage
        src={
          "https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"
        }
        alt="main image"
      />
    </MainImage>
  </MainHero>
  );
};

export default Hero;
