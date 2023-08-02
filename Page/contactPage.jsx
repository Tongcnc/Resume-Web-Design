import React from "react";
import { contactInfo } from "../Info/allInfo";

function ContactPage() {
  return (
    <div>
      <div className="contact-list">
        {contactInfo.map((item) => {
          return (
            <div key={item.id} className="contact-item">
              <li>{item.title}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactPage;
