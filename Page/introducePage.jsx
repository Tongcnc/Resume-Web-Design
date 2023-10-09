import "../src/App.css";
import { myCV } from "../Info/allInfo";
import { HashLink as Link } from "react-router-hash-link";
import Launching from "../src/image/undraw_Launching.svg";

function IntroducePage() {
  return (
    <div className="intro-page">
      <div className="intro-container">
        <div>
          <p className="intro-greeting">{"Hi!  I'm"}</p>
          <h1 className="intro-name">Chanokchol Klamphu</h1>
          <p
            className="intro-carreer"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Fullstack Developer
          </p>

          <p className="intro-description">
            I am a software developer in the training process of transitioning
            from a diverse background in architecture to the dynamic world of
            software development.
          </p>
        </div>
        <div
          className="intro-button"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <a href={myCV.link} target="_blank" rel="noreferrer">
            <button>Download CV</button>
          </a>
          <button>
            <Link smooth to="#contact" className="hireme">
              Hire me
            </Link>
          </button>
        </div>
      </div>
      <img
        src={Launching}
        alt="graphic-launching"
        data-aos="fade-left"
        data-aos-duration="1500"
      />
    </div>
  );
}

export default IntroducePage;
