import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Error from "../pages/Error";
import ProgressAnalytics from "../pages/ProgressAnalytics";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/progress" element={<ProgressAnalytics />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Router;
