import React from "react";
import "../src/App.css";
import { contactInfo } from "../Info/allInfo";

function ContactPage() {
  return (
    <div className="contact-list">
      {contactInfo.map((item) => {
        return (
          <div key={item.id} className="contact-item">
            <a href={item.content} target="_blank">
              <img src={item.image} width="32px" />
            </a>
            {/* <p>{item.title}</p> */}
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ContactPage;
