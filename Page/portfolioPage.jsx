import "../src/App.css";
import { portfolioInfo } from "../Info/allInfo";
import { useState, useEffect } from "react";
import PopUp from "../components/popUp";

function PortfolioPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const showPopupHandler = (id) => {
    setShowPopup(true);
    setActiveID(id);
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setActiveTab("All");
  }, []);

  return (
    <div className="port-container" id="projects">
      <div className="space"></div>
      <p>My Portfolio</p>
      <h2 className="port-title">Recent Work</h2>
      <div className="tabs">
        {["All", "Front-End", "Full-Stack"].map((tab) => (
          <button
            key={tab}
            onClick={() => changeTab(tab)}
            className={`tab-button ${activeTab === tab ? "focused" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="port-list">
        {portfolioInfo
          .filter((item) => activeTab === "All" || item.tab === activeTab)
          .map((item) => (
            <div
              key={item.id}
              className="port"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img src={item.source.image} alt={item.title} />
              <h3>{item.title}</h3>
              <div
                onClick={() => showPopupHandler(item.id)}
                className="moreDetail"
              >
                <p>more details</p>
                <img
                  src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-arrow-right-lined.png&r=201&g=97&b=222"
                  alt="arrow"
                />
              </div>
            </div>
          ))}
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
