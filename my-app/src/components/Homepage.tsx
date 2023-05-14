import React from "react";
import Hero from "./Hero/Hero";
import Coonect from "../pages/Coonect";

const Homepage = (): JSX.Element => {
  return (
    <div>
      <Hero />
      <div className="w-80% mx-auto flex justify-between gap-8 cursor-pointer">
        <video
          src="https://www.beachbodyondemand.com/assets/BODgroups_Sizzle.ddb3ba03c0ce1d1e.mp4.mp4"
          autoPlay
          muted
          loop
          className="w-1/2 mx-auto block cursor-pointer"
        />
        <img src="video.png" alt="video" />
      </div>
      <img
        src="res.png"
        alt="random"
        className="w-11/12 mx-auto block cursor-pointer"
      />
      <img
        src="success.png"
        alt="random"
        className="w-11/12 mx-auto block cursor-pointer"
      />
      <img
        src="track.png"
        alt="random"
        className="w-11/12 mx-auto block cursor-pointer"
      />
      <Coonect/>
    </div>
  );
};

export default Homepage;