import React from "react";
import "./index.css";
import mainPictureDT from "../../../assets/image-web-3-desktop.jpg";
import mainPictureMob from "../../../assets/image-web-3-mobile.jpg";
function MainNews(props) {
  return (
    <div className="main-news">
      <picture className="main-picture">
        <source srcSet={mainPictureDT} media="(min-width: 768px)" />
        <source srcSet={mainPictureMob} media="(max-width: 600px)" />
        <img src={mainPictureDT} alt="Front page news" />
      </picture>
      <div className="main-desc">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="brief-desc">
          <p>
            We dive into the next evolution of web that claims to put the power
            of the platforms back into the hands of the people. But is it really
            fulfilling its promsie?
          </p>
          <a href="haha"><span className="left-span">R E A D  </span> <span> M O R E</span></a>
        </div>
      </div>
    </div>
  );
}

export default MainNews;
