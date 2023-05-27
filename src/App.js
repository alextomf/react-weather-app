import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lodz" />
      </div>
      <footer>
        <a
          href="https://github.com/alextomf/React-Weather-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code by Alex Tom
        </a>
      </footer>
    </div>
  );
}
