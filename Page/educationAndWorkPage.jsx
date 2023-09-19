import "../src/App.css";
import { educationAndWork } from "../Info/allInfo";

function EducationAndWorkPage() {
  return (
    <div className="educationWork-list" id="education">
      <h2 className="educationWork-title">Educations and Work Experirence</h2>
      {educationAndWork.map((item) => {
        return (
          <div key={item.id} className="educationWork-item">
            <img src={item.image} alt="image" height="300px" />
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
