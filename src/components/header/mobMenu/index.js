import React from "react";
import "./index.css";

function MobMenu({ open, setOpen }) {
  return (
    <div className={open ? "mob-menu" : "mob-menu invisible"}>
      <a href="#Home">Home</a>
      <a href="#New">New</a>
      <a href="#Popular">Popular</a>
      <a href="#Trending">Trending</a>
      <a href="#Categories">Categories</a>
    </div>
  );
}

export default MobMenu;
