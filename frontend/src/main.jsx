import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataStoreProvider } from "./pages/context/DataStoreProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataStoreProvider>
      <App />
    </DataStoreProvider>
  </StrictMode>
);
