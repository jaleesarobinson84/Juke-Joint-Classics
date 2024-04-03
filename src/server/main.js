import express from "express";
import ViteExpress from "vite-express";

// Configurations
// require('dotenv').config();
const app = express();




// routes


// server run
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);


