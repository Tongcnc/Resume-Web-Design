function PopUp({ setShowPopup, activeID, portfolioInfo }) {
  const project = portfolioInfo.find((item) => item.id === activeID);

  return (
    <div className="popup-main">
      <div className="popup-container">
        <div className="popup-content">
          <button onClick={() => setShowPopup(false)} className="buttonX">
            <img
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.2.0/png/iconmonstr-x-mark-circle-filled.png&r=255&g=255&b=255"
              alt="cancel button"
              width="30px"
            />
          </button>
          {/* <img src={project.image} alt={project.title} /> */}
          <iframe src={project.image}></iframe>
          <div className="popup-box">
            <h2 className="popup-title">{project.title}</h2>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="popup-link"
            >
              my github repo
            </a>
            <p>{project.description}</p>
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
  );
}

export default PopUp;
