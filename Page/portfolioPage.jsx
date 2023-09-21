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
      <h2 className="port-title">My recent work</h2>
      <div className="port-list" data-aos="zoom-in-up" data-aos-duration="1500">
        {portfolioInfo.map((item) => {
          return (
            <div key={item.id} className="port">
              {/* <p>{item.title}</p> */}
              <iframe src={item.image}></iframe>
              <button
                onClick={() => showPopupHandler(item.id)}
                className="moreDetail"
              >
                more details
              </button>
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
