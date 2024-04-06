// models/dessert.model.js
import mongoose from 'mongoose';


const dessertSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: [{ type: String }],
});

const dessert = mongoose.model('dessert', dessertSchema);

export default dessert;