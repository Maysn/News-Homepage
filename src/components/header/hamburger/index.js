import React from "react";
import "./index.css";
import hamburger from "../../../assets/icon-menu.svg";
import hamburgerOpen from "../../../assets/icon-menu-close.svg";

function Hamburger({ open, setOpen }) {
  return (
    <div className="hamburger" onClick={() => setOpen(!open)}>
      <img src={open ? hamburgerOpen : hamburger} alt="Hamburger menu" />
    </div>
  );
}

export default Hamburger;
