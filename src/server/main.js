import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Import controllers
import entreeController from "./controllers/entreecontroller.js";
import dessertController from "./controllers/dessertcontroller.js";
import mealController from "./controllers/mealcontroller.js";

// Import models

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('error', (err) => console.log(err));

// ROUTES
// Entree routes
app.use('/entree', entreeController);
// Dessert routes
app.use('/dessert', dessertController);
// Meal routes
app.use('/meal', mealController);

// Start server
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);


// Use Meal routes
app.use("/meals", mealRoutes);

// Start Server
const port = 3000;
connectToDB().then(() => {
  ViteExpress.listen(app, port, () =>
    console.log(`Server is listening on port ${port}...`)
  );
});
