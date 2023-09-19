import "../src/App.css";
import { portfolioInfo } from "../Info/allInfo";
import { useState } from "react";
import PopUp from "../components/popUp";

function PortfolioPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showPopupHandler = (id) => {
    setShowPopup(true);
    setActiveID(id);
  };
  return (
    <div className="port-container" id="projects">
      <h2>My recent work</h2>
      <div className="port-list">
        {portfolioInfo.map((item) => {
          return (
            <div key={item.id} className="port">
              <p>{item.title}</p>
              {/* <a href={item.link} target="_blank" rel="noreferrer"> */}
              {/* <img src={item.image} alt="portfolio" /> */}
              <iframe
                src={item.image}
                // width="750" height="400"
              ></iframe>
              {/* </a> */}
              <div>
                <button onClick={() => showPopupHandler(item.id)}>
                  more details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showPopup && (
        <PopUp
          setShowPopup={setShowPopup}
          activeID={activeID}
          portfolioInfo={portfolioInfo}
        />
      )}
    </div>
  );
}

export default PortfolioPage;
