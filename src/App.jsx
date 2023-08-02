import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import IntroducePage from "../Page/introducePage";
import EducationAndWorkPage from "../Page/educationAndWorkPage";
import MySkillPage from "../Page/mySkillPage";
import PortfolioPage from "../Page/portfolioPage";
import ContactPage from "../Page/contactPage";

function App() {
  return (
    <div className="App">
      <IntroducePage />
      <hr />
      <EducationAndWorkPage />
      <hr />
      <MySkillPage />
      <hr />
      <PortfolioPage />
      <hr />
      <ContactPage />
    </div>
  );
}

export default App;
