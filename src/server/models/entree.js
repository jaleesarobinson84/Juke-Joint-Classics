import mongoose from  "mongoose"

const entreeSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingredients: String,
  instructions: String,
});

const entree = mongoose.model('entree', entreeSchema);

export default entree;