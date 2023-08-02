import React from "react";
import { educationAndWork } from "../Info/allInfo";

function EducationAndWorkPage() {
  return (
    <div>
      <div className="educationWork-list">
        {educationAndWork.map((item) => {
          return (
            <div key={item.id} className="educationWork-item">
              <h2>{item.name}</h2>
              <p>{item.school}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationAndWorkPage;
