function PopUp({ setShowPopup, activeID, portfolioInfo }) {
  const project = portfolioInfo.find((item) => item.id === activeID);

  return (
    <div className="popup">
      <div className="popup-container">
        <div className="popup-content">
          <button onClick={() => setShowPopup(false)} className="buttonX">
            x
          </button>
          {/* <img src={project.image} alt={project.title} /> */}
          <iframe
            src={project.image}
            // width="750" height="400"
          ></iframe>
          <div className="popup-box">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              my github repo
            </a>
            <p>{project.description}</p>
          </div>
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
  );
}

export default PopUp;
