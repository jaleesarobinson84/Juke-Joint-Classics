import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Layout/Components Imports
import dessertList from "./components/views/dessertList";
import entreeList from "./components/views/entreeList";
import mealList from "./components/views/mealList" 

// Routes


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
