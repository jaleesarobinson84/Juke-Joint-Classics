const mongoose = require('mongoose');
const { Schema } = mongoose;
const MealSchema = new Schema({
  // Define your meal schema fields here
});
const Meal = mongoose.model('Meal', MealSchema);
module.exports = Meal;
