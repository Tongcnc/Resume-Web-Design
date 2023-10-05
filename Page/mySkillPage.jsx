import "../src/App.css";
import { mySkillInfo } from "../Info/allInfo";

function MySkillPage() {
  return (
    <div className="skill-container" id="skill">
      <div className="skill-text-box">
        <p>My abilities</p>
        <h2 className="skill-title">Experience</h2>
      </div>
      <div className="skill-list">
        {mySkillInfo.map((item) => {
          return (
            <div key={item.id} className="skill">
              <div className="skill-title-box">
                <h2>{item.title}</h2>
              </div>
              <ul>
                {item.program.map((skill, index) => (
                  <li key={index} data-aos="fade-up" data-aos-duration="1500">
                    <img
                      src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.3.0/png/iconmonstr-cube-filled.png&r=201&g=97&b=222"
                      alt="check icon"
                      width="30px"
                    />
                    {skill}
                  </li>
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
