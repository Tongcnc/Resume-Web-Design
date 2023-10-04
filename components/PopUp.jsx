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
      <div className="popup-main-box">
        <div className="popup-button">
          <button onClick={() => setShowPopup(false)} className="buttonX">
            <img
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.2.0/png/iconmonstr-x-mark-circle-filled.png&r=255&g=255&b=255"
              alt="cancel button"
              width="30px"
            />
          </button>
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
