function PopUp({
  setShowPopup,
  activeID,
  portfolioInfoFront,
  portfolioInfoBack,
  conbineForAll,
}) {
  const project =
    portfolioInfoFront.find((item) => item.id === activeID) ||
    portfolioInfoBack.find((item) => item.id === activeID) ||
    conbineForAll.find((item) => item.id === activeID);

  return (
    <div className="popup-main">
      <div
        className="popup-main-box"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        <div className="popup-button">
          <svg
            width="30px"
            fill="currentColor"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShowPopup(false)}
            className="buttonX"
          >
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
        <div className="popup-container">
          <div className="popup-content">
            <img src={project.image} className="pic" alt="project" />
            <div className="popup-box">
              <h2 className="popup-title">{project.title}</h2>
              <div className="link-container">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="popup-link"
                >
                  my github
                </a>
                {project.linkdemo !== null ? (
                  <a
                    href={project.linkdemo}
                    target="_blank"
                    rel="noreferrer"
                    className="popup-link"
                  >
                    demo
                  </a>
                ) : null}
              </div>
              <p className="popup-description">{project.description}</p>
              <div className="tech-box">
                <p>Technologies:</p>
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
