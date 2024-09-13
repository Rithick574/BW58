import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import ContextProvider from "./context/searchContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ContextProvider> */}
      <App />
    {/* </ContextProvider> */}
  </StrictMode>
);