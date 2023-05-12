import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Error from "../pages/Error";

const Router = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<h1>login oage</h1>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
};

export default Router;
