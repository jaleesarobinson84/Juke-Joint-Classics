const mongoose = require('mongoose');
const { Schema } = mongoose;
const DessertSchema = new Schema({
  // Define your dessert schema fields here
});
const Dessert = mongoose.model('Dessert', DessertSchema);
module.exports = Dessert;
