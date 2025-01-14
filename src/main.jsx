import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./App.jsx";
import { Counter } from "./components/Counter.jsx";
import Gallery from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Gallery />
  </StrictMode>
);
