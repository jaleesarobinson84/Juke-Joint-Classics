import sweetPotato from "../assets/sweetPotato.jpg";
import pecanPie from "../assets/pecanPie.jpg";
import bananaPudding from "../assets/bananaPudding.jpg";
import { useEffect, useState } from "react";

const DessertComponent = ({ dessert }) => {
  return (
    <div className="col">
      <div className="clearfix">
        <div className="dessert-card">
          <p className="dessert-card-text">{dessert.text}</p>
          <img src={sweetPotato} className="card-img-top" alt="sweet potato" />
          <div className="dessert-card-body">
            <h5 className="dessert-card-title">{dessert.title}</h5>
            <p className="dessert-card-ingredients"><b>Ingredients</b>: {dessert.ingredients}</p>
            <p className="dessert-card-instructions"><b>Instructions</b>: {dessert.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function DessertList() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    // Fetch or set desserts data
    setDesserts([
      {
        title: "Sweet Potato Pie",
        text: "Can't Resist This All Time Classic",
        ingredients: `Sweet Potatoes: I like to use medium sweet potatoes.
        Butter: Softened butter will mix more easily into the baked sweet potatoes when making this pie.
        Sugar: My family has traditionally used granulated sugar for this pie. If you are looking for a brown sugar version, I’ve included how to make it later in this article and in the recipe notes.
        Milk: Use your preference of whole milk, heavy cream, or evaporated milk in this recipe.
        Unbaked Pie Crust: There is NO need to pre-bake these pie crusts. While I hope you try my homemade pie crust recipe, you can also use your favorite 9-inch pie crusts from the store if you wish.`,
        instructions: `Preheat the oven to 400°F. Wash and dry the sweet potatoes, then prick them several times with a fork. Place the sweet potatoes on a parchment lined baking sheet and bake for 50-60 minutes or until tender and you can easily slide a knife or fork in the center. Set the baked sweet potatoes aside to cool.
        Lower oven temperature to 350°F. Next blind-bake the pie crust. Prick the bottom and sides of the crust a few times with a fork. Add a square piece of parchment paper inside the center of the crust and place pie weights (or dry beans) on top.
        Bake the crust in the oven for 15 minutes. After 15 minutes, remove the pie weights and parchment and return the crust to the oven to bake for another 10 minutes. Remove crust from the oven and let cool.
        ... (continue with the rest of the instructions)`,
      },
      {
        title: "Pecan Pie",
        text: "Make You Wanna Slap Yo' momma",
        ingredients: `Pecans: Can't make pecan pie without them!
        Eggs: Eggs bind the ingredients and hold the filling together.
        Corn Syrup: Sweetens, holds the filling together, and helps prevent crystallization while the pie bakes. I prefer dark corn syrup here for intensified flavor. See below if you’re interested in pie without corn syrup.
        Salt: A little salt balances the sweet, and is especially welcome in a pie made predominantly of sugar.
        Cinnamon: Cinnamon adds an extra layer of flavor! I don’t see many pecan pies with cinnamon; so thank you, Grandma, for giving me the opportunity to present a slightly unique pecan pie on our Thanksgiving tables.`,
        instructions: `The crust: Prepare my pie crust through step 5.
        After the pie dough chills, adjust oven rack to the lower third position and preheat to 350°F (177°C).
        Roll out the chilled pie crust onto a lightly floured surface. Remember, when rolling out the pie dough, always use gentle force with your rolling pin. Start from the center and work your way out in all directions, rotating the dough with your hands as you go. Roll it out into a circle 12 inches in diameter. Carefully place the dough in a 9-inch pie dish. Tuck it in with your fingers, making sure it’s smooth. For a beautiful edge, as shown in the video tutorial, fold the overhanging dough back over the edge and use your hands to mold the edge into a nice thick rim around the pie. Crimp the edges with a fork or use your fingers to flute the edges. Again, you can see me do this in the video above or in my separate how to crimp and flute pie crust tutorial. Brush the edges with egg wash. (To help guarantee a beautiful edge, I always chill the shaped dough in the pie dish for 10 minutes in the refrigerator or freezer before filling.)
        ... (continue with the rest of the instructions)`,
      },
      {
        title: "Banana Pudding",
        text: "Made with Soul",
        ingredients: `4 tablespoons (30 g) all-purpose flour
        1 1/2 cups (297 g) sugar
        pinch (0.4) kosher salt
        4 large eggs yolks
        4 cups (948 ml) milk
        2 teaspoons (10 ml) pure vanilla extract
        8 bananas, sliced
        1 12-ounce box (340 g) vanilla wafers`,
        instructions: `Preheat oven to 325º F. Chill the bowl and beaters for making the meringue (if making).
        Make the Custard:
        Combine flour, sugar and salt in a large, heavy saucepan.
        Lightly beat egg yolks and combine with milk in a large bowl or measuring cup. Pour the egg and milk mixture into dry ingredients in heavy saucepan. Cook over low to medium heat, stirring constantly, until ingredients are thickened and smooth. Remove saucepan from heat and stir in vanilla.
        To layer your banana pudding, begin by placing 1/3 of the vanilla wafers on the bottom of a 2 quart oven-safe glass bowl or baking dish.
        Slice bananas and place 1/3 on top of wafers.
        Pour one-third of custard over wafers and bananas.
        ... (continue with the rest of the instructions)`,
      },
    ]);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-3 g-3">
      {desserts.map((dessert, index) => (
        <DessertComponent key={index} dessert={dessert} />
      ))}
    </div>
  );
}

export default DessertList;
