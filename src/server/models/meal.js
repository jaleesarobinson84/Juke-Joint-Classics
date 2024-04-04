const mongoose = require('mongoose');
const { Schema } = mongoose;

const MealSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
