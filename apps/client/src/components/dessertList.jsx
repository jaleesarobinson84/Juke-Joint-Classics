import sweetPotato from "../assets/sweetPotato.jpg";
import pecanPie from "../assets/pecanPie.jpg";
import bananaPudding from "../assets/bananaPudding.jpg";

import { useEffect, useState } from "react";

const DessertComponent = ({dessert}) => {
  return (<div class="clearfix">
  <div class="dessert-card">
  <p class="dessert-card-text">{dessert.text}</p>
    <img src={sweetPotato} class="card-img-top" alt="sweet potato" />
    <div class="dessert-card-body">
      <h5 class="dessert-card-title">{dessert.title}</h5>
      <p class="dessert-card-ingredients"><b>Ingredients</b>: {dessert.ingredients}</p>
      <p class="dessert-card-instructions"><b>Instructions</b>: {dessert.instructions}</p>
    </div>
  </div>
</div>)
}

function dessertList() {

  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    fetchDesserts()
  },[])

  const fetchDesserts = async () => {
    console.log('fetching desserts')
    const response = await fetch('http://localhost:3000/dessert')
    const result = await response.json()
    if (result.length) {
      setDesserts(result)
    }
  }
  return (
    <div className="clearfix">
            {desserts.map(dessert => {
        return (<DessertComponent dessert={dessert}></DessertComponent>)
      })}
    <div className="clearfix">
      <div className="dessert-card">
      <p className="dessert-card-text">"Can't Resist This All Time Classic"</p>
        <img src={sweetPotato} className="card-img-top" alt="sweet potato" />
        <div className="dessert-card-body">
          <h5 className="dessert-card-title">Sweet Potato Pie</h5>
          <p className="dessert-card-ingredients"><b>Ingredients</b>:
Sweet Potatoes I like to use medium sweet potatoes.
Butter Softened butter will mix more easily into the baked sweet potatoes when making this pie.
Sugar My family has traditionally used granulated sugar for this pie. If you are looking for a brown sugar version, I’ve included how to make it later in this article and in the recipe notes.
Vanilla extract The vanilla extract enhances the flavor of the pie. I do recommend using pure vanilla extract rather than imitation vanilla flavoring as I believe you can taste the difference in the baked pie. 
Eggs You'll need 2 large eggs for this pie recipe. I also like to have them at room temperature to mix into the pie filling more easily. 
Milk Use your preference of whole milk, heavy cream, or evaporated milk in this recipe. You will not want to use a lower fat content milk.
Unbaked Pie Crust There is NO need to pre-bake these pie crusts. 
While I hope you try my homemade pie crust recipe, you can also use 
your favorite 9-inch pie crusts from the store if you wish.</p>
<p className="dessert-card-instructions"><b>Instructions</b>: 
Preheat the oven to 400°F. Wash and dry the sweet potatoes, then prick them several times with a fork. Place the sweet potatoes on a parchment lined baking sheet and bake for 50-60 minutes or until tender and you can easily slide a knife or fork in the center. Set the baked sweet potatoes aside to cool.
Lower oven temperature to 350°F. Next blind-bake the pie crust. Prick the bottom and sides of the crust a few times with a fork. Add a square piece of parchment paper inside the center of the crust and place pie weights (or dry beans) on top.
Bake the crust in the oven for 15 minutes. After 15 minutes, remove the pie weights and parchment and return the crust to the oven to bake for another 10 minutes. Remove crust from the oven and let cool.
Now make the pie filling. Scoop about 2 cups of the sweet potato flesh from the baked sweet potatoes and add to a large bowl. Using a potato masher or hand mixer, mash or blend the sweet potato flesh until smooth.
Add the melted butter, brown sugar, white sugar, vanilla, cinnamon, nutmeg, and a pinch of salt to the bowl. Blend the ingredients together with a hand mixer until smooth.
Add the eggs and evaporated milk to the sweet potato mixture and blend until smooth.
Pour the sweet potato pie filling into the crust. Add a foil ring around the edges to prevent the crust from over-browning. Bake the pie in the preheated 350°F oven for 50-55 minutes or until the pie is mostly set and the center is no longer liquid. It’s ok if the center has a slight jiggle when you shake the pan.
Remove the pie from the oven. It will be slightly domed and puffed around the edges. Let the pie cool at room temperature for at least 1 hour. Serve at room temperature or cover and refrigerate to serve later.</p>
        </div>
      </div>
    </div>
    <div className="clearfix">
      <div className="dessert-card">
      <p className="dessert-card-text">"Make You Wanna Slap Yo' momma"</p>
        <img src={pecanPie} className="card-img-top" alt="pecan pie" />
        <div className="dessert-card-body">
          <h5 className="dessert-card-title">Pecan Pie</h5>
          <p className="dessert-card-ingredients"><b>Ingredients</b>:
Pecans: Can't make pecan pie without them!
Eggs: Eggs bind the ingredients and hold the filling together.
Corn Syrup: Sweetens, holds the filling together, and helps prevent crystallization while the pie bakes. I prefer dark corn syrup here for intensified flavor. See below if you’re interested in pie without corn syrup.
Brown Sugar: You can use light or dark brown sugar; dark has a little deeper flavor, with its higher molasses content.
Pure Vanilla Extract: One of the key flavors.
Butter: Melted butter makes for the best buttery flavor.
Salt: A little salt balances the sweet, and is especially welcome in a pie made with nuts.
Cinnamon: Cinnamon adds an extra layer of flavor! I don’t see many pecan pies with cinnamon; 
so thank you, Grandma, for giving me the opportunity to present a slightly 
unique pecan pie on our Thanksgiving tables.</p>
<p className="dessert-card-instructions"><b>Instructions</b>:
The crust: Prepare my pie crust through step 5.
After the pie dough chills, adjust oven rack to the lower third position and preheat to 350°F (177°C).
Roll out the chilled pie crust onto a lightly floured surface. Remember, when rolling out the pie dough, always use gentle force with your rolling pin. Start from the center and work your way out in all directions, rotating the dough with your hands as you go. Roll it out into a circle 12 inches in diameter. Carefully place the dough in a 9-inch pie dish. Tuck it in with your fingers, making sure it’s smooth. For a beautiful edge, as shown in the video tutorial, fold the overhanging dough back over the edge and use your hands to mold the edge into a nice thick rim around the pie. Crimp the edges with a fork or use your fingers to flute the edges. Again, you can see me do this in the video above or in my separate how to crimp and flute pie crust tutorial. Brush the edges with egg wash. (To help guarantee a beautiful edge, I always chill the shaped dough in the pie dish for 10 minutes in the refrigerator or freezer before filling.)
The filling: Very roughly chop the pecans—some whole, some coarsely chopped is fine. Spread pecans evenly inside pie crust. Whisk the eggs, corn syrup, brown sugar, vanilla, melted butter, salt, and cinnamon together in a large bowl until combined. Pour over pecans.
Bake the pie for 50–55 minutes or until the top is lightly browned. After the first 20 minutes of bake time, I place a pie crust shield on top of the pie to prevent the edges from browning too quickly. You can also tent a piece of aluminum foil over the whole pie if it is browning too quickly. Remove finished pie from the oven and place on a wire rack to cool completely. The pie filling will settle as it cools.
Slice and serve pie warm or at room temperature. Top with whipped cream or ice cream.
Cover and store leftovers at room temperature for 1–2 days or in the refrigerator for 4–5 days.</p>
        </div>
      </div>
    </div>
    <div className="clearfix">
      <div className="dessert-card">
      <p className="dessert-card-text">"Made with Soul"</p>
        <img src={bananaPudding} className="card-img-top" alt="Banana pudding" />
        <div className="dessert-card-body">
          <h5 className="dessert-card-title">Banana Pudding</h5>
          <p className="dessert-card-ingredients"><b>Ingredients</b>:
          4 tablespoons (30 g) all-purpose flour
1 1/2 cups (297 g) sugar
pinch (0.4) kosher salt
3 large (150 g) eggs, separated (you’ll need whites later for meringue)
3 cups (681 g) milk
1 teaspoon (5 g) vanilla extract
1 (11-ounce) package (311 g) vanilla wafers, approximately 45 wafers
5-6 (575-690 g) bananas
3 egg whites, reserved from above
1/8 teaspoon (0.38 g) cream of tartar
1/4 cup (50 g) sugar
1 teaspoon (5 g) vanilla extract</p>
<p className="dessert-card-instructions"><b>Instructions</b>:
rep. Preheat oven to 325º F. Chill the bowl and beaters for making the meringue (if making).
Make the Custard:
Combine flour, sugar and salt in a large, heavy saucepan.
Lightly beat egg yolks and combine with milk in a large bowl or measuring cup. Pour the egg and milk mixture into dry ingredients in heavy saucepan. Cook over low to medium heat, stirring constantly, until ingredients are thickened and smooth. Remove saucepan from heat and stir in vanilla.
To layer your banana pudding, begin by placing 1/3 of the vanilla wafers on the bottom of a 2 quart oven-safe glass bowl or baking dish.
Slice bananas and place 1/3 on top of wafers.

Pour one-third of custard over wafers and bananas.
Repeat layering process two more times until all wafers, bananas, and custard have been used, ending with a final layer of the wafers. 
For the Meringue:
Whip egg whites with an electric mixer set at high speed.
Allow egg whites to foam, add cream of tartar and then gradually add sugar one tablespoon at a time. Continue whipping until sugar is well-dissolved. Add vanilla once stiff peaks have formed and whip until well-combined.
Spread the meringue over banana pudding, making sure to spread to the edges of the dish.
Bake for about 25 minutes until the meringue is lightly browned.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
  


  







export default dessertList