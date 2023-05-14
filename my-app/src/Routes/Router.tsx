import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Error from "../pages/Error";
import Started from "../pages/Started";
import Form from "../pages/Form";
import Form2 from "../pages/Form2";
import Formresult from "../pages/Formresult";
import Login from "../pages/Login";
import Rigster from "../pages/Rigster";
import ProgressAnalytics from "../pages/ProgressAnalytics";
import Nutritional from "../pages/Nutritional";
import NutrationMain from "../pages/NutrationMain";
import { Workout } from "../components/Workout";

const Router = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/started" element={<Started />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/res" element={<Formresult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Rigster />} />
        <Route path="/nutritional" element={<Nutritional />} />
        <Route path="/nutritionalmain" element={<NutrationMain />} />
        <Route path="/progress" element={<ProgressAnalytics />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Router;
