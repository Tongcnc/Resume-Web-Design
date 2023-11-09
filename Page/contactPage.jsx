import "../src/App.css";
import { contactInfo } from "../Info/allInfo";
import { HashLink as Link } from "react-router-hash-link";

function ContactPage() {
  return (
    <section id="contact">
      <div className="box-container">
        <p>Let's Talk</p>
        <h2>Contact Me</h2>
        <div className="box-contact">
          {contactInfo.map((item) => {
            return (
              <div key={item.id} className="contact-item">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="social-icon"
                    data-aos="zoom-in"
                    data-aos-duration="400"
                  >
                    <path d={item.image} />
                  </svg>
                </a>
                <h3>{item.title}</h3>
                <p className="contact-text">{item.content}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-me"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <p>Contact me</p>
                  <img
                    src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-arrow-right-lined.png&r=201&g=97&b=222"
                    alt="arrow"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="scrollTop-container">
        <div className="rocket-box">
          <Link smooth to="#top" className="scrollTop">
            scroll to top
            <img
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2014/png/iconmonstr-rocket-1.png&r=201&g=97&b=222"
              alt="rocket-icon"
            />
          </Link>
          <div className="circle"></div>
          <div className="rocket-circle big"></div>
          <div className="rocket-circle small right"></div>
          <div className="rocket-circle small left"></div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
