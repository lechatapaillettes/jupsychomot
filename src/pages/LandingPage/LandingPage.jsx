import React from "react";
import Welcome from "./Welcome";
import Psychomot from "./Psychomot";
import QuandConsulter from "./QuandConsulter";
import Guidance from "./Guidance"
import QuiSuisJe from "./QuiSuisJe";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div>
      <Welcome />
      <Psychomot />
      <QuandConsulter />
      <Guidance />
      <QuiSuisJe />
      <Contact />
    </div>
  );
};

export default LandingPage;
