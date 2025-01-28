import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

// Ensure HelmetProvider wraps the App component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
