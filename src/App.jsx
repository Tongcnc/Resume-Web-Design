import "./App.css";
import "../components/navigationBar.css";
import "../Page/introducePage.css";
import "../Page/educationAndWorkPage.css";
import "../Page/mySkillPage.css";
import "../Page/portfolioPage.css";
import "../Page/contactPage.css";
import "../components/PopUp.css";
import NavigationBar from "../components/navigationBar";
import IntroducePage from "../Page/introducePage";
import EducationAndWorkPage from "../Page/educationAndWorkPage";
import MySkillPage from "../Page/mySkillPage";
import PortfolioPage from "../Page/portfolioPage";
import ContactPage from "../Page/contactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <IntroducePage />
        <EducationAndWorkPage />
        <MySkillPage />
        <PortfolioPage />
        <ContactPage />
      </Router>
    </div>
  );
}

export default App;
