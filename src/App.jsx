import React from "react";
import logo from "./assets/images/redrock_logo.png";
import canmore from "./assets/images/canmore@3x.png";
import okotoks from "./assets/images/okotoks@3x.png";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <div className="app__container">
          <div className="app__line"></div>
          <div className="app__company">
            <img
              src={logo}
              alt="welcome to red rock pizza"
              className="app__logo"
            />
          </div>
          <div className="app__line"></div>
        </div>
        <h1>Red Rock Pizza</h1>
      </header>
      <section className="app__info">choose your location</section>
      <section className="app__chooser">
        <a href="https://canmore.redrockpizza.ca" className="app__choice">
          <h2>Canmore</h2>
          <img src={canmore} alt="lets head to canmore" className="app__site" />
        </a>
        <a href="https://okotoks.redrockpizza.ca" className="app__choice">
          <h2>Okotoks</h2>
          <img src={okotoks} alt="lets head to okotoks" className="app__site" />
        </a>
      </section>
    </main>
  );
}

export default App;
