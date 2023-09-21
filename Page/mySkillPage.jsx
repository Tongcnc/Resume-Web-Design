import React from "react";
import "../src/App.css";
import { mySkillInfo } from "../Info/allInfo";

function MySkillPage() {
  return (
    <div className="skill-container">
      <h2>Additional passions</h2>
      <div className="skill-list">
        {mySkillInfo.map((item) => {
          return (
            <div key={item.id} className="skill">
              <img
                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.2.0/png/iconmonstr-check-mark-circle-filled.png&r=255&g=255&b=255"
                alt="check icon"
                width="50px"
              />
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
