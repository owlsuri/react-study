import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import Clock from "./chapter_04/clock";

const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
