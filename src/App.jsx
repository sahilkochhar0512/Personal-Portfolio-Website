import Topbar from "./components/topbar/topbar.jsx";
import Intro from "./components/intro/intro.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Contact from "./components/contact/contact.jsx";
import Works from "./components/works/works.jsx";
import Menu from "./components/menu/menu.jsx";
import "./app.scss";
import {useState} from "react";


function App() {
  const [menuOpen, setMenuOpen]= useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
