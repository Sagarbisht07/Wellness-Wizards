import axios from "axios";
import React from "react";

const Nutritional = () => {
  const [data, setData] = React.useState([]);
  const [myBmi, setMyBmi] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const baseUrl = "https://wellness-q8lu.onrender.com";

  React.useEffect(() => {
    const bmi = localStorage.getItem("bmi");
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
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <h1
        style={{
          color: "red",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Loading...
      </h1>
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
        <div
          style={{
            border: "1px solid black",
            marginTop: "10px",
            padding: "10px",
          }}
          key={item._id}
        >
          <h2>
            BMI:{" "}
            {item.bmi === 17
              ? `${myBmi} underweight`
              : item.bmi === 21
              ? `${myBmi} overweight`
              : `${myBmi} healthy`}
          </h2>
          <p>Exercise: {item.exercise}</p>
          <p>Meals: {item.meals}</p>
          <p>Meditation: {item.meditation}</p>
          <p>Sleep: {item.sleep}</p>
          <p>Social: {item.social}</p>
          <p>Water: {item.water}</p>
          <p>Work: {item.work}</p>
        </div>
      ))}
    </div>
  );
};

export default Nutritional;
