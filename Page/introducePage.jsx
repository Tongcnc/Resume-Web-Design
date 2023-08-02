import NavigationBar from "../components/navigationBar";
import "./App.css";

function IntroducePage() {
  return (
    <div className="intro-container">
      <NavigationBar />
      <p className="intro-greeting">Hi! I'm</p>
      <p className="intro-name">Chanokchol Klampoo</p>
      <h1 className="intro-carreer">Creative Designer</h1>
      <p className="intro-descrip">
        Since creative designers often interact with creative teams, managers
        and clients, they need strong communication skills.
      </p>
      <button>Hire me</button>
      <button>Download CV</button>
    </div>
  );
}

export default IntroducePage;
