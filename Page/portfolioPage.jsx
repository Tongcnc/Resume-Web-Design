import "../src/App.css";
import { portfolioInfoFront } from "../Info/allInfo";
import { portfolioInfoBack } from "../Info/allInfo";
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

  const conbineForAll = [...portfolioInfoFront, ...portfolioInfoBack];

  return (
    <div className="port-container" id="projects">
      <p>My Portfolio</p>
      <h2 className="port-title">Recent work</h2>
      <div className="tabs">
        <button
          onClick={() => changeTab("All")}
          className={`tab-button ${activeTab === "All" ? "focused" : ""}`}
        >
          All
        </button>
        <button onClick={() => changeTab("Front-End")}>Front-End</button>
        <button onClick={() => changeTab("Back-End")}>Back-End</button>
      </div>

      <div className="port-list">
        {conbineForAll.map((item) => {
          // Filter items based on the active tab
          if (activeTab === "All" || item.category === activeTab) {
            return (
              <div
                key={item.id}
                className="port"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img src={item.image} alt={item.title} />
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
            );
          }
          return null; // Exclude items that don't match the active tab
        })}
      </div>

      <div className="port-list">
        {portfolioInfoFront.map((item) => {
          if (activeTab === "Front-End" || item.category === activeTab) {
            return (
              <div
                key={item.id}
                className="port"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img src={item.image} alt={item.title} />
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
            );
          }
          return null;
        })}
      </div>

      <div className="port-list">
        {portfolioInfoBack.map((item) => {
          if (activeTab === "Back-End" || item.category === activeTab) {
            return (
              <div
                key={item.id}
                className="port"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img src={item.image} alt={item.title} />
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
            );
          }
          return null;
        })}
      </div>

      {showPopup && (
        <PopUp
          setShowPopup={setShowPopup}
          activeID={activeID}
          portfolioInfoFront={portfolioInfoFront}
          portfolioInfoBack={portfolioInfoBack}
          conbineForAll={conbineForAll}
        />
      )}
    </div>
  );
}

export default PortfolioPage;
