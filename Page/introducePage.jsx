import "../src/App.css";
import { myCV } from "../Info/allInfo";
import { HashLink as Link } from "react-router-hash-link";

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
            Software Developer
          </p>

          <p className="intro-description">
            I am a software developer transitioning from a diverse background in
            architecture to the dynamic world of software development.
            <br />I bring a unique blend of creativity to becoming a software
            developer.
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
        src="https://res.cloudinary.com/dkcstuaym/image/upload/v1699538644/Resume/icon/undraw_launching_ay12gk.svg"
        alt="graphic-launching"
        data-aos="fade-left"
        data-aos-duration="1500"
      />
    </div>
  );
}

export default IntroducePage;
