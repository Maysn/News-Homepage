import React from "react";
import "./index.css";
import retropcs from "../../assets/image-retro-pcs.jpg";
import laptops from "../../assets/image-top-laptops.jpg";
import gamingGrowth from "../../assets/image-gaming-growth.jpg";

function OtherArticles(props) {
  return (
    <div className="more-articles">
      <div className="article">
        <div className="img">
          <img src={retropcs} alt="Retro PC" />
        </div>
        <div className="details">
          <h3>01</h3>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="article">
        <div className="img">
          {" "}
          <img src={laptops} alt="laptop" />
        </div>
        <div className="details">
          <h3>02</h3>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="article">
        <div className="img">
          <img src={gamingGrowth} alt="Gamepad" />
        </div>
        <div className="details">
          <h3>03</h3>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}
export default OtherArticles;
