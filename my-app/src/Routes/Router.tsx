import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Error from "../pages/Error";
import ProgressAnalytics from "../pages/ProgressAnalytics";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EducationalResource from "../pages/EducationalResource";
import Nutritional from "../pages/Nutritional";

const Router = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nutritional" element={<Nutritional />} />
        <Route path="/register" element={<Register />} />
        <Route path="/progress" element={<ProgressAnalytics />} />
        <Route path="/educational" element={<EducationalResource />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Router;
