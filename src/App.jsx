import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IntroducePage from "../Page/introducePage";
import EducationAndWorkPage from "../Page/educationAndWorkPage";
import MySkillPage from "../Page/mySkillPage";
import PortfolioPage from "../Page/portfolioPage";
import ContactPage from "../Page/contactPage";

function App() {
  return (
    <div className="App">
      {/* <IntroducePage />
      <EducationAndWorkPage />
      <MySkillPage />
      <PortfolioPage />
      <ContactPage /> */}

      <Router>
        <Routes>
          <Route path="/" element={<IntroducePage />} />
          <Route
            path="/page/educationAndWork"
            element={<EducationAndWorkPage />}
          />
          <Route path="/page/skill" element={<MySkillPage />} />
          <Route path="/page/portfolio" element={<PortfolioPage />} />
          <Route path="/page/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
