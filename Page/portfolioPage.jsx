import React from "react";
import { portfolioInfo } from "../Info/allInfo";

function PortfolioPage() {
  return (
    <div>
      <div className="port-list">
        {portfolioInfo.map((item) => {
          return (
            <div key={item.id} className="port-item">
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioPage;
