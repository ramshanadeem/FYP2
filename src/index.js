import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import DoctorSignup from "views/DoctorSignUp/DoctorSignUp";
import { createMemoryHistory } from "history";
import SurveyPage from "views/SurveyPage/SurveyPage";
import MediumClickUp from "views/MediumClickUp/MediumClickUp";
import Ratio from "views/Ratio/Ratio";
const history = createMemoryHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <Routes>
      <Route path="/screeningQuestion" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/Ratio" element={<Ratio />} />
      <Route path="/" element={<Components />} />
      <Route path="/signup" element={<LoginPage />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/Video" element={<MediumClickUp />} />
      <Route path="/doctorRegister" element={<DoctorSignup />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
