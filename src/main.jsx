import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "atropos/css";
import { AnimationContextWrapper } from "./context/animation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimationContextWrapper>
    <App />
  </AnimationContextWrapper>
);
