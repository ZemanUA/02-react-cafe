import { createRoot } from "react-dom/client";
import App from "./components/App";
import { StrictMode } from "react";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <>
    <StrictMode> 
      <App></App>
    </StrictMode>
  </>
)