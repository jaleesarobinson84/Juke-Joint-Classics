import mongoose from  "mongoose"

const mealSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const meal = mongoose.model('meal', mealSchema);

export default meal;