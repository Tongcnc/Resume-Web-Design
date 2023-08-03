import NavigationBar from "../components/navigationBar";
import "../src/App.css";
import { myCV } from "../Info/allInfo";

function IntroducePage() {
  return (
    <div className="intro-page">
      <NavigationBar />
      <div className="intro-container">
        <p className="intro-greeting">Hi! I'm</p>
        <p className="intro-name">Chanokchol Klampoo</p>
        <h1 className="intro-carreer">Creative Designer</h1>
        <p>
          Since creative designers often interact with creative teams,
          <br />
          managers and clients, they need strong communication skills.
        </p>
        <div className="intro-button">
          <button>Hire me</button>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default IntroducePage;
