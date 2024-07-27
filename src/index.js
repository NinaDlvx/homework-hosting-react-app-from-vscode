import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";
import logo from "./logo.svg";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <img src={logo} className="App-logo" alt="logo of react" />
      <footer>
        This Project was coded by
        <a href="https://github.com/NinaDlvx" target="_blank" rel="noreferrer">
          Nina Delvaux
        </a>
        ,
        <br />
        is
        <a
          href="https://github.com/NinaDlvx/homework-hosting-react-app-from-vscode"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
        and
        <a
          href="https://magenta-sopapillas-7908e7.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  </StrictMode>
);
