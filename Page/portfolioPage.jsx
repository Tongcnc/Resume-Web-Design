import "../src/App.css";
import { portfolioInfo } from "../Info/allInfo";

function PortfolioPage() {
  return (
    <div className="port-container" id="projects">
      <h2>My recent work</h2>
      <div className="port-list">
        {portfolioInfo.map((item) => {
          return (
            <div key={item.id} className="port">
              <p>{item.title}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                {/* <img src={item.image} alt="portfolio" /> */}
                <iframe src={item.image} width="750" height="400"></iframe>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioPage;
