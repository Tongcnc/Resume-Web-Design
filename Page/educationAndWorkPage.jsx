import React from "react";
import "../src/App.css";
import { educationAndWork } from "../Info/allInfo";
import confident from "../src/image/confident.png";

function EducationAndWorkPage() {
  return (
    <div className="educationWork-list">
      {educationAndWork.map((item) => {
        return (
          <div key={item.id} className="educationWork-item">
            <img src={confident} alt="image" height="380px" />
            <h2>{item.year}</h2>
            <p>
              {item.name}
              <br />
              {item.school}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationAndWorkPage;
