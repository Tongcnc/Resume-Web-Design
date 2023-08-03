import { useState } from "react";
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
      <EducationAndWorkPage />
      <MySkillPage />
      <PortfolioPage />
      <ContactPage />
    </div>
  );
}

export default App;
