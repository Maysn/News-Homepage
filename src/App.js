import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import OtherArticles from "./components/other";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Header open={open} setOpen={setOpen} />
      <Main />
      <OtherArticles />
    </div>
  );
}

export default App;
