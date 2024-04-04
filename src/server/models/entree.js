const mongoose = require('mongoose');
const { Schema } = mongoose;

const EntreeSchema = new Schema({
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

const Entree = mongoose.model('Entree', EntreeSchema);

module.exports = Entree;

