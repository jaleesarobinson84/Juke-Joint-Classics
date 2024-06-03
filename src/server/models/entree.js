import mongoose from "mongoose";

const entreeSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingredients: String,
  instructions: String,
});

const Entree = mongoose.model("Entree", entreeSchema);

const entreesData = [
  // Existing entrees data...

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

const insertEntrees = async () => {
  try {
    await Entree.insertMany(entreesData);
    console.log("Entrees data inserted successfully");
  } catch (error) {
    console.error("Error inserting entrees data:", error);
  }
};

export { Entree, insertEntrees };

