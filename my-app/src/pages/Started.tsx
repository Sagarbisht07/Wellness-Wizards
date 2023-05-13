import React from "react";

import { Link } from "react-router-dom";

const Started = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fsignup%2Fbg.png&w=1920&q=75")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}>
      <div
        style={{
          backgroundColor: "rgb(254, 254, 254)",
          width: "40%",
          height: "80%",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          marginLeft: "25rem",
        }}>
        <div>
          <h1
            style={{
              width: "70%",
              textAlign: "center",
              paddingTop: "13rem",
              fontSize: "2rem",
              color: "black",
              margin: "auto",
              fontWeight: "500",
              lineHeight: "1.5",
              letterSpacing: "-0.02em",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            }}>
            {" "}
            Welcome! Let's customize Fitness Buddy for your goals.{" "}
          </h1>
          <button
            style={{
              width: "73%",
              textAlign: "center",
              paddingTop: "15rem",
              fontSize: "2rem",
              margin: "auto",
              backgroundColor: "rgb(29, 79, 245)",
              color: "rgb(255, 255, 255)",
              padding: "1rem",
              borderRadius: "0.5rem",
              marginTop: "2rem",
              marginBottom: "2rem",
              marginLeft: "5rem",
            }}>
            {" "}
            <Link to="/form">Get Started </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Started;
