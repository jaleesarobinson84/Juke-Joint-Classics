import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Layout/Components Imports
import dessertList from "./views/layouts/dessertList";
import entreeList from "./views/layouts/entreeList";
import mealList from "./views/layouts/mealList" 

// Routes


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
