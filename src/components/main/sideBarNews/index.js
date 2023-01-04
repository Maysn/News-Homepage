import React from "react";
import "./index.css";
function SidebarNews(props) {
  return (
    <div className="sidebar-news">
      <h2>New</h2>
      <div className="read-also">
        <div className="other-articles">
          <h4>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cards ever catch up to EVs?</p>
          <hr />
        </div>
        <div className="other-articles">
          <h4>The Downsides of AI Artistry</h4>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
        </div>
        <div className="other-articles">
          <h4>Is VC Funding Drying Up?</h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}
export default SidebarNews;
