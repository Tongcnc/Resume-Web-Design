import React from "react";
import { mySkillInfo } from "../Info/allInfo";

function MySkillPage() {
  return (
    <div>
      <div className="skill-list">
        {mySkillInfo.map((item) => {
          return (
            <div key={item.id} className="skill-item">
              <h2>{item.title}</h2>
              <ul>
                {item.program.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MySkillPage;
