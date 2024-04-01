import express from "express";
import ViteExpress from "vite-express";

// Configurations
// require('dotenv').config();
const app = express();
// // mongoose
// const mongoose = require('mongoose');
// Connection URL
const uri = 'mongodb://localhost:27017/mydatabase';

// // mongoose
// const mongoose = require('mongoose');
// Connection URL
const uri = 'mongodb://localhost:27017/mydatabase';


// routes
app.get("", (req, res) => {
  res.send("Running");
});

// server run
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Continue with your application logic here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

