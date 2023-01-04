import React from "react";
import "./index.css";
import MainNews from "./mainNews";
import SidebarNews from "./sideBarNews";

function Main(props) {
  return (
    <main className="front-page">
      <MainNews />
      <SidebarNews />
    </main>
  );
}

export default Main;
