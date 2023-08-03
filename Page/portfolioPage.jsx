import React from "react";
import "../src/App.css";
import { portfolioInfo } from "../Info/allInfo";

function PortfolioPage() {
  return (
    <div className="port-container">
      <h2>My recent work</h2>
      <div className="port-list">
        {portfolioInfo.map((item) => {
          return (
            <div key={item.id} className="port">
              <p>{item.title}</p>
              <a href={item.image} target="_blank">
                <img src={item.image} alt="portfolio" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioPage;
