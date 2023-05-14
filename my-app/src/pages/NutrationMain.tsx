import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import styles from "./Nutration.module.css";
import { Link, NavLink } from "react-router-dom";
import Slider from "./Swiper";

const NutrationMain = () => {
  return (
    <>
      <Box className={styles.heading}>
        <Center textAlign={"center"} as="b" fontSize={["s", "m", "xl"]}>
          <span className="px-4 py-2  text-2xl rounded-full text-white  bg-indigo-500 ">
            Nutritional Tips for Health
          </span>
        </Center>
        <br />
        <Box
          w={["90%", "90%", "90%"]}
          display="flex"
          flexDirection={["column", "column", "row"]}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          m={"auto"}
          p={"3%"}
          bg="white"
          borderRadius={"10px"}
          gap={"10%"}>
          <VStack w={["90%", "85%%", "45%"]} color="white">
            <Text
              style={{
                fontFamily: "sans-serif",
                color: "black",
                fontSize: "20px",
                fontWeight: "semibold",
                textAlign: "center",
                marginTop: "4rem",
                lineHeight: "1.5",
              }}>
              Doctors won’t make you healthy. Nutritionists won’t make you slim.
              Teachers won’t make you smart. Gurus won’t make you calm. Mentors
              won’t make you rich. Trainers won’t make you fit. Ultimately, you
              have to take responsibility. Save yourself Healthy balanced
              dieting concept. Selection of rich fiber sources vegan food.
              Vegetables fruit seeds beans ingredients for cooking..
            </Text>
            <Button
              style={{
                fontFamily: "sans-serif",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "3rem",
                backgroundColor: "black",
                borderRadius: "10px",
                border: "2px solid white",
                padding: "10px",
                width: "200px",
                height: "50px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}>
              GET START
            </Button>
          </VStack>
          <Box
            w={["95%", "95%", "60%"]}
            m="auto"
            marginTop={["20px", "20px", "0px"]}>
            <AspectRatio ratio={4 / 3}>
              <iframe
                style={{ borderRadius: "10px" }}
                src="https://www.youtube.com/embed/77G2CE5sYhM"
                title="Cronometer."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </AspectRatio>
          </Box>
        </Box>

        {/* youtube */}
        <Center className="mt-5  w-full ">
          <img
            src="https://tpc.googlesyndication.com/simgad/12975835772109584189"
            alt=""
          />
        </Center>

        <Center
          textAlign={"center"}
          as="b"
          fontSize={["s", "m", "xl"]}
          color="white">
          <img
            src="head.png"
            alt="heading"
            style={{
              width: "25%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "10px",
              marginLeft: "-53rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          />
        </Center>

        <Flex ml="4rem" w={"80%"} m={"auto"}>
          <NavLink to="https://youtu.be/ekilHp_Q7mo">
            <img
              src="video1.png"
              alt="video"
              style={{
                width: "90%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </NavLink>
          <NavLink to="https://youtu.be/PwEd4FYwfgc">
            <img
              src="video2.png"
              alt="video"
              style={{
                width: "90%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </NavLink>
          <NavLink to="https://youtu.be/-C4HYwiH_hA">
            <img
              src="video3.png"
              alt="video"
              style={{
                width: "90%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </NavLink>
          <NavLink to="https://youtu.be/ud1CtY9m1II">
            <img
              src="video4.png"
              alt="video"
              style={{
                width: "90%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </NavLink>
        </Flex>

        <Center className="mt-5  w-full ">
          <img
            src="https://tpc.googlesyndication.com/simgad/5767864067074781117"
            alt=""
          />
        </Center>

        <Stack
          w={"80%"}
          m={"auto"}
          marginTop="3rem"
          p={"3%"}
          cursor={"pointer"}
          bgColor={"rgb(247, 248, 250)"}>
          <img src="eat1.png" alt="eating" />
          <img src="eat2.png" alt="eating" />
          <img src="eat3.png" alt="eating" />
          <img src="eat4.png" alt="eating" />
          <img src="eat5.png" alt="eating" />
        </Stack>
        <br />
        <br />

        <Slider />
      </Box>
    </>
  );
};

export default NutrationMain;
