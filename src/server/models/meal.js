import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const meal = mongoose.model('meal', mealSchema);

// Define meal data
const mealData = [
  {
    name: "Infamous 'Itis' Meal",
    image: "turkeyWings.jpg",
    description: "Turkey Wings, Rice and Gravy, and Green Beans, slice of sweet potato pie",
  },
  {
    name: "Friday Fish Fry Special",
    image: "catfishFry.jpg",
    description: "Fried Catfish, black eyed peas and collard greens with banana pudding",
  },
  {
    name: "Grandmomma's Sunday Dinner",
    image: "friedChicken.jpg",
    description: "Fried Chicken, Macaroni and Cheese, collard greens, slice of pecan pie",
  },
];

// Insert meal data into the database
meal.insertMany(mealData)
  .then(() => console.log('Meal data inserted successfully'))
  .catch(err => console.error('Error inserting meal data:', err));

export default meal;
