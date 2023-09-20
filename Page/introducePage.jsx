import "../src/App.css";
import { myCV } from "../Info/allInfo";
import { contactInfo } from "../Info/allInfo";
import { useState } from "react";
import Launching from "../src/image/undraw_Launching.svg";

function IntroducePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="intro-page">
      <div className="intro-container">
        <div>
          <p className="intro-greeting">{"Hi!  I'm"}</p>
          <p className="intro-name">Chanokchol Klamphu</p>
          <h1
            className="intro-carreer"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Fullstack Developer
          </h1>
          <p>
            I am a software developer in the training process of transitioning
            <br />
            from a diverse background in architecture to the dynamic world of
            <br />
            software development.
          </p>
        </div>
        <div className="intro-button">
          <a href={myCV.link} target="_blank" rel="noreferrer">
            <button>Download CV</button>
          </a>
          <button onClick={() => setIsOpen(!isOpen)}>Hire me</button>
          {isOpen && (
            <ul className="intro-contact">
              {contactInfo.map((item) => (
                <div key={item.id} className="contact-item">
                  <a href={item.content} target="_blank" rel="noreferrer">
                    <img src={item.image} width="32px" alt="icon" />
                  </a>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <img
          src={Launching}
          alt=""
          height="350px"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </div>
    </div>
  );
}

export default IntroducePage;
