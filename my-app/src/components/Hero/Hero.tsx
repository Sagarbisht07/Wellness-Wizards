import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from "react-icons/bs";
import {
  HeroImage,
  MainButtons,
  MainDescription,
  MainDetails,
  MainHero,
  MainImage,
  MainTitleLine,
  MainTitlte,
} from "../styles/Hero.styled";
import { StyledButton } from "../styles/Button.styled";
import React from "react";
import { Link } from "react-router-dom";

function calculateBMI(weight: number, height: number) {
  height = height / 100;
  const bmi = weight / (height * height);
  return Number(bmi.toFixed(2)); // return BMI rounded to two decimal places
}

const Hero = (): JSX.Element => {
  const [bmi, setBmi] = React.useState(0.0);
  const height = localStorage.getItem("height");
  const weight = localStorage.getItem("weight");

  React.useEffect(() => {
    const myheight = height ?? "";
    const myweight = weight ?? "";
    let calculateBmi: number = calculateBMI(Number(myweight), Number(myheight));
    setBmi(calculateBmi);
    localStorage.setItem("bmi", calculateBmi.toString());
  }, [height, weight]);

  return (
    <MainHero>
      <MainDetails
        style={{
          marginLeft: "5rem",
        }}
      >
        <MainTitlte
          style={{
            color: "black",
          }}
        >
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

        <h1 style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
          Your BMI is :- {bmi ? `${bmi} 😊` : "`Please login`👍"}
        </h1>
        <br />
        <MainButtons>
          <Link to={"/nutritional"}>
            <StyledButton primary={true}>
              Get Started <ArrowIcon />
            </StyledButton>
          </Link>

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
