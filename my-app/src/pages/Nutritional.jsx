import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import BMI from "./BMI";

const Nutritional = () => {
  const [data, setData] = React.useState([]);
  const [myBmi, setMyBmi] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const baseUrl = "https://wellness-q8lu.onrender.com";
  const weight = localStorage.getItem("weight") || 0;

  const navigate = useNavigate();

  React.useEffect(() => {
    const bmi = localStorage.getItem("bmi") || 0;
    setMyBmi(Number(bmi));

    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/bmi`);
        if (response.data?.data) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    if (!weight) {
      navigate("/login");
    } else {
      fetchData();
    }
  }, []);

  if (isLoading) {
    return (
      <img
        src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
        alt="loading"
        width={"20%"}
        style={{ margin: "auto" }}
      />
    );
  }

  let filteredData = [];

  if (myBmi) {
    if (myBmi < 17) {
      filteredData = [data[0]];
    } else if (myBmi > 21) {
      filteredData = [data[1]];
    } else {
      filteredData = [data[2]];
    }
  } else {
    filteredData = data;
  }

  return (
    <div style={{ color: "black" }}>
      {filteredData?.map((item) => (
        <BMI filteredData={filteredData} myBmi={myBmi} />
      ))}
    </div>
  );
};

export default Nutritional;
