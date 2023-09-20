import "../src/App.css";
import { contactInfo } from "../Info/allInfo";
import { useState } from "react";

function ContactPage() {
  const [text, setText] = useState("contact me");

  function addMsg(item) {
    setText(item.content);
  }

  return (
    <section id="contact">
      <div className="show-message">{text}</div>
      <div className="contact-list">
        {contactInfo.map((item) => {
          if (item.id === 1 || item.id === 2 || item.id === 3) {
            return (
              <div
                key={item.id}
                className="contact-item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <a href={item.content} target="_blank" rel="noreferrer">
                  <img src={item.image} width="40px" alt="icon" />
                </a>
              </div>
            );
          } else {
            return (
              <div
                key={item.id}
                className="contact-item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <a onClick={() => addMsg(item)}>
                  <img src={item.image} width="40px" alt="icon" />
                </a>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default ContactPage;
