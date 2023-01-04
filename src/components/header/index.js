import "./index.css";
import MobMenu from "./mobMenu";
import NavBar from "./navBar";
import logo from "../../assets/logo.svg";
import Hamburger from "./hamburger";

function Header({ open, setOpen }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} style={{ width: "auto", height: "30px" }} alt="Logo" />
      </div>
      <nav>
        <NavBar />
        <Hamburger open={open} setOpen={setOpen} />
      </nav>
      <div
        className={open ? "overlay" : "invisible"}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={open ? "app-overlay" : "invisible"}
        onClick={() => setOpen(!open)}
      ></div>
      <MobMenu open={open} setOpen={setOpen} />
    </header>
  );
}

export default Header;
