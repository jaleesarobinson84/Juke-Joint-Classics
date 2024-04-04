const mongoose = require('mongoose');
const { Schema } = mongoose;

const DessertSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Dessert = mongoose.model('Dessert', DessertSchema);

module.exports = Dessert;
