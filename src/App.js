import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import OtherArticles from "./components/other";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body.style.overflow = "hidden";
    } else if (!open) {
      body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <div className="App">
      <Header open={open} setOpen={setOpen} />
      <Main />
      <OtherArticles />
    </div>
  );
}

export default App;
