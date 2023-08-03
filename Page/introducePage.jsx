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
        <h1 className="intro-carreer">Fullstack Developer</h1>
        <p>
          Since creative designers often interact with creative teams,
          <br />
          managers and clients, they need strong communication skills.
        </p>
        <div className="intro-button">
          <button>Hire me</button>
          <a
            href="https://drive.google.com/file/d/1A6mRnAAOKNRBNzcuT9gEHSXRZ7lQRomG/view?usp=sharing"
            target="_blank"
          >
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntroducePage;
