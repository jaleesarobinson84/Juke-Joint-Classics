const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const meal = mongoose.model('meal', mealSchema);

module.exports = meal;