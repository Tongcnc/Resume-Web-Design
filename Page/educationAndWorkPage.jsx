import "../src/App.css";
import { educationAndWork } from "../Info/allInfo";

function EducationAndWorkPage() {
  return (
    <>
      <div className="educationWork-list" id="education">
        <span className="space"></span>
        <p>My Experirence</p>
        <h2 className="educationWork-title">Educations and Work</h2>
        <div className="educationWork-container">
          {educationAndWork.map((item) => {
            return (
              <div key={item.id} className="contain">
                <div className="sun">
                  <img
                    src={item.image}
                    alt="image"
                    height="300px"
                    className="image"
                  />
                  <p className="text-year">{item.year}</p>
                  <h2>{item.name}</h2>

                  <div className="detail-main-container">
                    {item.details.map((detail) => {
                      return (
                        <>
                          <div
                            key={detail.id}
                            className="detail-container"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                          >
                            <div className="detail-boxL">
                              <h2>{detail.year}</h2>
                            </div>
                            <div className="detail-boxR">
                              <h3>{detail.name}</h3>
                              <p>{detail.school}</p>
                            </div>
                          </div>
                          {detail.description !== null ? (
                            <div className="detail-desc">
                              <h3>Key responsibilities:</h3>
                              <ul>
                                <li
                                  data-aos="fade-right"
                                  data-aos-duration="1500"
                                >
                                  <img
                                    src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-check-mark-4.png&r=201&g=97&b=222"
                                    alt="check-icon"
                                    width="20px"
                                    height="20px"
                                  />
                                  {detail.description[0]}
                                </li>
                                <li
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-check-mark-4.png&r=201&g=97&b=222"
                                    alt="check-icon"
                                    width="20px"
                                    height="20px"
                                  />
                                  {detail.description[1]}
                                </li>
                                <li
                                  data-aos="fade-right"
                                  data-aos-duration="1200"
                                >
                                  <img
                                    src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-check-mark-4.png&r=201&g=97&b=222"
                                    alt="check-icon"
                                    width="20px"
                                    height="20px"
                                  />
                                  {detail.description[2]}
                                </li>
                              </ul>
                            </div>
                          ) : null}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="earth">
                  <div className="moon"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EducationAndWorkPage;
