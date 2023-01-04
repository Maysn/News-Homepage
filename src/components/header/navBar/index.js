import React from "react";
import "./index.css";

function NavBar(props) {
  return (
    <div className="nav-links">
      <a href="#Home">Home</a>
      <a href="#New">New</a>
      <a href="#Popular">Popular</a>
      <a href="#Trending">Trending</a>
      <a href="#Categories">Categories</a>
    </div>
  );
}

export default NavBar;
