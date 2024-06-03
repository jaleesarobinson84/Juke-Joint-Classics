import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const Meal = mongoose.model('Meal', mealSchema); // Changed 'meal' to 'Meal' for naming convention
export default Meal;

// Adding meal data
const meals = [
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
  }
];

// If you want to add these meals to your database
Meal.insertMany(meals)
  .then(() => {
    console.log('Meals added successfully.');
  })
  .catch((err) => {
    console.error('Error adding meals:', err);
  });

