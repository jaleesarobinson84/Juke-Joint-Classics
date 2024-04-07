import mongoose from "mongoose";

// Define the schema
const entreeSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingredients: String,
  instructions: String,
});

// Create the model
const Entree = mongoose.model("Entree", entreeSchema);

// Insert entrees data into the database
const insertEntreesData = async () => {
  try {
    const entreesData = [
      {
        name: "Turkey Wings",
        image: "turkeyWings.jpg",
        ingredients: "Rinse turkey wings, add to a large roasting pan or casserole dish, and pat dry...",
        instructions: "After letting the dry rub do its magic, top the turkey wings with the onion, green peppers, and garlic then pour the stock and Worcestershire on top...",
      },
      {
        name: "Fried Catfish",
        image: "friedCatfish.jpg",
        ingredients: "6 pounds catfish fillets, 1 cup buttermilk, 4 cups vegetable oil or lard for frying...",
        instructions: "Rinse fish fillets under cold water, cut into 2-inch wide strips; place in a large bowl...",
      },
      {
        name: "Fried Chicken",
        image: "friedChicken.jpg",
        ingredients: "4 - 5 lb whole chicken cut into 8 pieces (or 4-5 lbs of chicken parts), 1/2 cup mild hot sauce...",
        instructions: "Combine 8 cups cold water, 2 tbsp salt, and 4 tbsp sugar. Stir until the salt and sugar dissolve...",
      },
      {
        name: "Black Eyed Peas",
        image: "blackPeas.jpg",
        ingredients: "1 (16 ounce) package dried black-eyed peas, 6 cups water, 1 medium onion, chopped...",
        instructions: "Sort and wash peas; place in a large Dutch oven. Add remaining ingredients and bring to a boil...",
      },
      {
        name: "Candied Yams",
        image: "candiedYams.jpg",
        ingredients: "Sweet potatoes, Butter, Granulated sugar, Heavy whipping cream, Cinnamon...",
        instructions: "Scrub, peel, and slice your yams into 1/2 inch rounds. In a medium pot over medium-high heat, combine the sweet potatoes and the rest of the ingredients...",
      },
      {
        name: "Collard Greens",
        image: "collardGreens.jpg",
        ingredients: "Fresh Collard Greens, Onion, Garlic, Red Pepper Flakes, Fully-Cooked Smoked Turkey Leg or ham hocks...",
        instructions: "Start by pulling and tearing greens away from stems. Take a handful of greens, roll them up, and cut the rolls horizontally into small pieces...",
      },
      {
        name: "Southern Green Beans",
        image: "greenBeans.jpg",
        ingredients: "6 slices thick-cut bacon (cut into 1/2 inch pieces), 1 medium yellow onion, diced...",
        instructions: "Lightly spray the bottom of a large Dutch oven with cooking spray, then spread the bacon slices over the bottom of the pot in an even layer...",
      },
      {
        name: "Macaroni and Cheese",
        image: "macCheese.jpg",
        ingredients: "8 to 10 ounces elbow macaroni, ½ cup whole milk, 1 (12-ounce) can evaporated milk...",
        instructions: "Preheat oven to 350ºF. Bring a large pot of water to a boil and then salt generously. Cook macaroni just shy of package directions, al dente...",
      },
      {
        name: "Rice & Gravy",
        image: "riceGravy.jpg",
        ingredients: "1 ¼ - 1 ½ pounds top sirloin cut into 1-inch pieces, Salt and Pepper to taste...",
        instructions: "Remove beef from fridge 30 minutes prior to cooking. Pat dry. Season with salt and pepper...",
      },
    ];

    await Entree.insertMany(entreesData);
    console.log("Entrees data inserted successfully");
  } catch (error) {
    console.error("Error inserting entrees data:", error);
  }
};

export { Entree, insertEntreesData };
