import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import entreemodel from "./controllers/entreecontroller.js";
import dessertmodel from "./controllers/dessertcontroller.js";
import mealmodel from "./controllers/mealcontroller.js";
// import dotenv from "dotenv";

// Configurations
// dotenv.config();
const app = express();
app.use(express.json());


// Middleware
app.use(express.urlencoded({ extended: false }))

// ROUTES
// entree
app.use('/entree', entreemodel)
app.use('/dessert', dessertmodel)
app.use('/meal', mealmodel)

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/juke_joint', { useNewUrlParser: true, useUnifiedTopology: true, });

// server run
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);