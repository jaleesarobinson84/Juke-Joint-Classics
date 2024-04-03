import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import Dessert from "./models/dessert";
import Entree from "./models/entree";
import Meal from "./models/meal";
import dessertRoutes from "./Routes/dessertRoutes";
import entreeRoutes from "./Routes/entreeRoutes";
import mealRoutes from "./Routes/mealRoutes";

// MongoDB Connection
const uri = 'mongodb://localhost:27017/mydatabase';

// Create Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
async function connectToDB() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

// Define Routes
app.get("/", (req, res) => {
  res.send("Running");
});

// Use Dessert routes
app.use("/desserts", dessertRoutes);

// Use Entree routes
app.use("/entrees", entreeRoutes);

// Use Meal routes
app.use("/meals", mealRoutes);

// Start Server
const port = 3000;
connectToDB().then(() => {
  ViteExpress.listen(app, port, () =>
    console.log(`Server is listening on port ${port}...`)
  );
});
