import React from "react";
import turkeyWings from "../assets/turkeyWings.jpg";
import friedCatfish from "../assets/friedCatfish.jpg";
import friedChicken from "../assets/friedChicken.jpg";
import blackPeas from "../assets/blackPeas.jpg";
import candiedYams from "../assets/candiedYams.jpg";
import collardGreens from "../assets/collardGreens.jpg";
import greenBeans from "../assets/greenBeans.jpg";
import macCheese from "../assets/macCheese.jpeg";
import riceGravy from "../assets/riceGravy.jpeg"

function entreeList() {
  return (
    <div class="row row-cols-1 row-cols-sm-3">
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"Big Momma's Special"</p>
        <img src={turkeyWings} class="card-img-top" alt="turkey wings"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Turkey Wings</h5>
          <p class="entree-card-instructions">How To Make Baked Turkey Wings
  Rinse turkey wings, add to a large roasting pan or casserole dish, and pat dry.
  Add the poultry seasoning, mixture to the turkey wings and toss until they are well coated.  Let sit in the fridge to marinate.
  After letting the dry rub do it's magic, top the turkey wings with the onion, green peppers, and garlic then pour the stock and Worcestershire on top.
  Cover and bake until tender then remove the foil and brown to get that crispy skin. Remove a cup of sauce from the bottom of the wings and stir with cornstarch.  
  Then add back in the pan, and get ready to try not to lick the plate! </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"Auntie's Secret Dish"</p>
        <img src={friedCatfish} class="card-img-top" alt="fried catfish"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Fried Catfish</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
  6 pounds catfish fillets
  1 cup buttermilk
  4 cups vegetable oil or lard for frying
  Cornmeal Mix:
  1 cup all-purpose flour
  2 1/2 cups yellow cornmeal
  2 tablespoons Cajun Seasoning used: Slap Ya Mama Cajun Seasoning
  1 teaspoon garlic powder or granulated garlic
  2 teaspoons ground black pepper
  <p class="entree-card-instructions"><b>Instructions</b>
  Rinse fish fillets under cold water, cut into 2-inch wide strips; place in a large bowl.
  Cover fish with buttermilk and mix with hands; cover and refrigerate: let soak for 30 minutes to an hour before frying.
  In a large zip top bag, combine flour, cornmeal, cajun seasoning, garlic powder and black pepper.
  Heat oil in a large iron skillet over medium-high heat to about 400 degrees.
  Meanwhile drain off buttermilk from the fish. Drop 3 to 4 pieces into the cornmeal mixture and coat each piece well.
  Fry fish pieces for 3 to 4 minutes per side, or until golden brown.
  Remove from hot oil and drain on paper towels or brown paper bags.</p>
  Serve hot with tarter sauce. </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">Momma's Heart and Soul</p>
        <img src={friedChicken} class="card-img-top" alt="fried chicken"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Fried Chicken</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
            4 - 5 lb whole chicken cut into 8 pieces( or 4-5 lbs of chicken parts)
          1/2 cup mild hot sauce I use Frank's Red Hot for this recipe
  2 1/4 cups all purpose flour
  1/4 cup cornstarch
  2 1/2 tsp seasoning salt
  1 tsp ground black pepper
  1 tbsp poultry seasoning
  1 tbsp onion powder
  1 tbsp garlic powder
  1 tsp cayenne pepper
  4 cups of peanut oil for frying Make sure that the chicken is nice and clean.
  <p class="entree-card-instructions"><b>Instructions</b>
  Combine 8 cups cold water, 2 tbsp salt, and 4 tbsp sugar.
  Stir until the salt and sugar dissolve.
  Pour the brine ( sugar/salt/water) into the bowl or container with the chicken.
  Make sure that the chicken is covered with brine.
  Cover the bowl/container, then place in the refrigerator overnight
  Drain the brine from the bowl, but do not rinse the chicken.
  Place the chicken in a large bowl, then pour the hot sauce all over the chicken.
  Next, combine the all purpose flour, cornstarch, and all of the seasonings
  Pour the flour mixture into a large freezer bag, then toss in the chicken wings.
  Shake the bag, until the chicken is well coated with flour.
  Remove the chicken from the bag, and shake off any excess flour.
  Let the chicken sit for about 15 minutes before frying to ensure that the flour sticks.
  Now pour the oil into a large skillet, and let it heat until it reaches 350-375 F.
  Carefully add in the chicken, and fry until it's completely cooked throughout, and golden brown.
  Place the chicken on a paper towel lined plate.</p>
  Serve and enjoy!</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"Good Luck Charm"</p>
        <img src={blackPeas} class="card-img-top" alt="black eye peas"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Black Eyed Peas</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
  1(16 ounce) package dried black-eyed peas, 6 cups water, 1 medium onion, chopped,2 cloves garlic, minced
  1 teaspoon salt, 1⁄2teaspoon black pepper, 1 teaspoon sugar, 1 ham hocks or 2 cups cooked ham, cut into small cubes
  1 -2 jalapeno pepper, seeds removed and chopped</p>
  <p class="entree-card-instructions"><b>Instructions</b>
  Sort and wash peas; place in a large Dutch oven.
  Add remaining ingredients and bring to a boil.
  Cover, reduce heat and simmer for 1- 1 1/2 hours, or until peas are tender.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"All In One"</p>
        <img src={riceGravy} class="card-img-top" alt="rice and gravy"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Rice & Gravy</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
          1 ¼ -1 ½ pounds top sirloin cut into 1-inch pieces
Salt and Pepper to taste
1 ½ tablespoons vegetable oil divided
4 tablespoons unsalted butter
1 cup yellow onion diced
½ cup bell pepper diced
3 cloves garlic minced
½ teaspoon dried thyme
4 tablespoons all-purpose flour
3 ½ cups beef broth
1 tablespoon Worcestershire sauce
2 tablespoons finely chopped parsley
Cooked rice for serving</p>
<p class="entree-card-instructions"><b>Instructions</b>
Remove beef from fridge 30 minutes prior to cooking. Pat dry. Season with salt and pepper.
In large Dutch oven, heat 1 tablespoon of vegetable oil over medium high heat. Add in half of the pieces of beef. Sear for about 1 minute, then turn on another side and continue cooking for 1-2 minutes, getting deep brown color on the beef. Remove beef from pan and set aside.
Add ½ tablespoon oil to pan repeat with remaining beef tips.
Once the second batch is seared off, take it out of the pan and set aside with the rest of the beef, reduce heat to medium and add butter. Once it begins to foam, add onions, bell pepper. Season with salt and pepper. Cook until almost tender, about 4 minutes. Add garlic and thyme and cook for an additional minute.
Sprinkle flour over vegetables. Using a wooden spoon, stir to make sure flour is fully hydrated and coating the vegetables.
Slowly pour in beef broth, about half cup at a time, scraping the bottom to release the brown bits and stirring constantly to keep the gravy smooth. Do not add broth all at once.
Increase heat to medium high and bring to a boil. Add beef tips and any juices. Add Worcestershire sauce and reduce heat to a simmer, allowing beef to finish cooking and gravy to thicken, about 40-50 minutes.
Stir in parsley and serve over cooked rice.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"Pot Liquor Secret"</p>
        <img src={collardGreens} class="card-img-top" alt="collard greens"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Collard Greens</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
  Fresh Collard Greens Purchase from the Farmers Market or Organic if possible. Make sure that the leaves look healthy, green, and full.
  Onion- Yellow onions will add flavor to the greens.
  Garlic Garlic will compliment the flavor of the onion and greens.
  Red Pepper Flakes Red Pepper flakes will add some slight heat to the greens.
  Fully-Cooked Smoked Turkey Leg- This is the best alternative for those who prefer not to use pork. The smoked turkey leg will add flavor and smokiness to the greens. If you prefer pork, use ham hocks or thick-cut cooked bacon.
  Chicken Broth- Chicken broth creates a richer, more flavorful broth. Water can be used in place of broth or a mixture of chicken broth & water.
  Seasoning( Black pepper, Smoked Applewood salt, and Distilled white vinegar) 
  These seasonings will enhance the flavors of the finished greens. Resulting in a bold, 
  flavorful pot of savory collard greens that are smoky, slightly spicy, and a tad salty and vinegary! 
  Perfection!</p>
  <p class="entree-card-instructions"><b>Instructions</b>
  Start by pulling and tearing greens away from stems. Take a hand full of greens, roll them up and cut the rolls horizontally into small pieces. We personally remove the stems but this is a personal decision.
Next, add greens to empty clean sink and wash them removing all grit, sand and debris thoroughly with cold water until water becomes clear.
Next rinse the ham hock very well then add to a large pot along with enough water to fully submerge the ham hock then cover with a lid. Cook over medium high heat for about 45 minutes or until ham hock is near being tender.
Once ham hock is almost tender, add greens and about 4-5 additional cups of water (or chicken stock for more flavor) or enough to just barely cover greens to the pot. This will become your pot likker.
Add along the rest of the ingredients to the pot and cook while covered for at least 2 hours or until completely tender. Most water should have evaporated by this point just having enough to barely cover the greens.
  </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">Grandmomma's Way Like No Other</p>
        <img src={macCheese} class="card-img-top" alt="mac and cheese"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Macaroni and Cheese</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
  8 to 10 ounces elbow macaroni, ½ cup whole milk
  1 (12-ounce) can evaporated milk, 2 eggs, lightly beaten, 1½ teaspoons white pepper
  1½ teaspoons granulated sugar, ½ teaspoon salt or to taste, ½ cup (1 stick) butter, cut into small pieces
  2 tablespoons sour cream, ½ pound Velveeta, cut into small chunks
  8 ounces shredded Colby-Jack cheese or 4 ounces Colby and 4 ounces Monterey Jack
  4 ounces shredded sharp cheddar cheese, 1 cup shredded mild cheddar cheese</p>
  <p class="entree-card-instructions"><b>Instructions</b>
  Preheat oven to 350º. Bring large pot of water to boil and then salt generously. Cook macaroni just shy of package directions, al dente. Drain well and place in 9" by 13" baking dish or pan.
  In same pasta pot, whisk together whole milk, evaporated milk, eggs, salt, pepper and sugar until combined. Pour mixture over cooked macaroni in pan.
  Add butter, sour cream, Velveeta, Colby-Jack and sharp cheddar cheeses. Stir to combine well and top evenly with shredded mild cheddar.
  Bake for 35 to 40 minutes until bubbly and lightly browned on top. 
  Let rest 10 minutes or so before serving. Enjoy!</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"No Marshmallows In This Dish"</p>
        <img src={candiedYams} class="card-img-top" alt="candied yams"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Candied Yams</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
          Sweet potatoes: The main ingredient for this dish are sweet potatoes. When buying sweet potatoes, make sure you choose medium-large-sized sweet potatoes that are firm and without bruises or cracks.
  Butter: Unsalted butter sets the base for the candied glaze and it gives these candied yams so much flavor.
  Granulated sugar: Granulated sugar works best for this recipe. It adds the sweetness required for candied yams.  Brown sugar works also but can make the sauce stickier.
  Heavy whipping cream: Heavy whipping cream creates a creamy and rich syrup.
  Cinnamon: Cinnamon has a slightly sweet, woodsy, and citrusy flavor with a hint of warmth. It is the perfect addition to candied yam!
  Nutmeg: Nutmeg is known for adding aroma and flavor to both sweet and savory dishes. It has a nutty and warm flavor that resembles clove.
  Clove: Clove has a prominent, slightly sweet, and bitter flavor. It also adds warmth to the dish.
  Real maple: Real maple has a beautiful aroma. It has a distinct caramel-like and sweet flavor.
  Vanilla extract: Vanilla extract adds a depth of flavor. However, it is an optional ingredient, 
  and you can skip it if you don’t like it or have any on hand.</p>
  <p class="entree-card-instructions"><b>Instructions</b>
  Scrub, peel and slice your yams into 1/2 inch rounds. In a medium pot over medium high heat, combine the sweet potatoes and the rest of the ingredients. Stir the sweet potatoes until coated in the sugar and butter mixture.
Let it come to a boil. Cover then simmer for about 50 minutes or until the yams are nice and tender when slightly pierced with the tines of a fork or taste. If the yam is still a bit hard. Let it cook a bit longer. 
Remove the top then set stove to medium. Let the cooking liquid come to a boil. Stirring occasionally until the cooking liquid reduces about 10 minute or until the syrup coats the yams. Remove the pot with the candied yams from the stove and place them into 
the oven until you are ready to serve them. These taste best warm. </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"No Basic Flavor Here"</p>
        <img src={greenBeans} class="card-img-top" alt="green beans"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Southern Green Beans</h5>
          <p class="entree-card-ingredients"><b>Ingredients</b>
  6 slices thick cut bacon ( cut into 1/2 inch pieces), 1 medium yellow onion (diced, about 1 cup)
  3 cloves garlic (minced), 1/2 teaspoon fine sea salt, 1/2 teaspoon ground black pepper
  1/4 teaspoon crushed red pepper flakes, 1 1/2 pounds baby potatoes (quartered)
  1 pound green beans (washed with ends trimmed), 4 Tablespoons butter (divided)
  4 cups chicken broth</p>
  <p class="entree-card-instructions"><b>Instructions</b>
  Lightly spray the bottom of a large dutch oven with cooking spray, then spread the bacon slices over the bottom of the pot in an even layer. Turn the heat to medium and cook the bacon until crispy (about 8-10 minutes). Remove the bacon from the pot using a slotted spoon. Leave about 2 Tablespoons of bacon grease in the pot, and discard the rest.
  Add the diced onion to the pot and cook it in the bacon grease until the onion is soft and translucent (about 5 minutes).
  Add the minced garlic and red pepper flakes to the onion and cook until aromatic (30-60 seconds).
  Place the trimmed beans and quartered potatoes in the pot, and pour in the chicken broth. Add half of the cooked bacon pieces (reserve the rest for later) and 2 Tablespoons of butter. Stir to mix (moving the beans and potatoes around so that everything is covered with broth).
  Cover with a fitted lid and turn the heat up to bring to just a boil. Once boiling, reduce the heat to medium-low. Keep covered and simmer until the beans are tender and the potatoes are fork tender (about 25-30 minutes).
  Reserve 1/4 cup of the broth, then carefully drain the remaining broth (leaving the green beans and potatoes in the pot). 
  Add the remaining 2 Tablespoons of butter, the reserved bacon, salt, pepper, 
  and the reserved broth to the pot. Gently toss the beans and potatoes to coat in 
  butter and seasonings. Transfer to a serving dish and enjoy.</p>
        </div>
      </div>
    </div>
  </div>   
    )
  }
  

export default entreeList;