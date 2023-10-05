import "../src/App.css";
import { contactInfo } from "../Info/allInfo";
import { HashLink as Link } from "react-router-hash-link";

function ContactPage() {
  return (
    <section id="contact">
      <div className="box-container">
        <p>Get in Touch</p>
        <h2>Contact Me</h2>
        <div className="box-contact">
          {contactInfo.map((item) => {
            return (
              <div key={item.id} className="contact-item">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    src={item.image}
                    alt="social-icon"
                    className="social-icon"
                  />
                </a>
                <h3>{item.title}</h3>
                <p className="contact-text">{item.content}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-me"
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
        {/* <p>Get in Touch</p>
        <h2>Chanokchol Klamphu</h2> */}
        <Link smooth to="#top" className="scrollTop">
          scroll to top
          <img
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2014/png/iconmonstr-rocket-14.png&r=201&g=97&b=222"
            alt="rocket-icon"
          />
        </Link>
      </div>
    </section>
  );
}

export default ContactPage;
