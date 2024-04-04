import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import entree from "./controllers/entreecontroller";





// Configurations
// dotenv.config();
const app = express();
app.use(express.json());


// Middleware
app.use(express.urlencoded({ extended: false }))

// ROUTES
// entree
// import entrees_Controller from "./controllers/entrees_controller"
app.use('/entree', entree)
// dessert
// import dessertController from "./controllers/desserts_controller"
// app.use('/dessert')

// meal
// import mealController from "./controllers/meals_controller"
// app.use('/meal')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('error', (err) => console.log(err));

// server run
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);


