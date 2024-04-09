import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import cssImg from "./images/css_logo.png";
import htmlImg from "./images/html_logo.png";
import reactImg from "./images/react_logo.png";

function App() {
  return (
    <>
      <h1>Hello Vite React App</h1>
      <h3 style={{ textAlign: "center" }}>Front-End Technologies</h3>
      <div className="img_container">
        <img src={htmlImg} alt="htmlimg" />
        <img src={cssImg} alt="cssimg" />
        <img src={reactImg} alt="reactimg" />
      </div>
    </>
  );
}

export default App;
