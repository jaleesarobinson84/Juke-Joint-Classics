const mongoose = require('mongoose');
const { Schema } = mongoose;
const EntreeSchema = new Schema({
  // Define your entree schema fields here
});
const Entree = mongoose.model('Entree', EntreeSchema);
module.exports = Entree;
