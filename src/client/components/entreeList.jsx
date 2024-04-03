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
          <p class="entree-card-text">How To Make Baked Turkey Wings
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
          <p class="entree-card-text">Ingredients
  6 pounds catfish fillets
  1 cup buttermilk
  4 cups vegetable oil or lard for frying
  Cornmeal Mix:
  1 cup all-purpose flour
  2 1/2 cups yellow cornmeal
  2 tablespoons Cajun Seasoning used: Slap Ya Mama Cajun Seasoning
  1 teaspoon garlic powder or granulated garlic
  2 teaspoons ground black pepperInstructions
  Rinse fish fillets under cold water, cut into 2-inch wide strips; place in a large bowl.
  Cover fish with buttermilk and mix with hands; cover and refrigerate: let soak for 30 minutes to an hour before frying.
  In a large zip top bag, combine flour, cornmeal, cajun seasoning, garlic powder and black pepper.
  Heat oil in a large iron skillet over medium-high heat to about 400 degrees.
  Meanwhile drain off buttermilk from the fish. Drop 3 to 4 pieces into the cornmeal mixture and coat each piece well.
  Fry fish pieces for 3 to 4 minutes per side, or until golden brown.
  Remove from hot oil and drain on paper towels or brown paper bags.
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
          <p class="entree-card-text">4 - 5 lb whole chicken cut into 8 pieces( or 4-5 lbs of chicken parts)
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
  Place the chicken on a paper towel lined plate.
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
          <p class="entree-card-text">INGREDIENTS
  UNITS: US
  1(16 ounce) package dried black-eyed peas, 6 cups water, 1 medium onion, chopped,2 cloves garlic, minced
  1 teaspoon salt, 1⁄2teaspoon black pepper, 1 teaspoon sugar, 1 ham hocks or 2 cups cooked ham, cut into small cubes
  1 -2 jalapeno pepper, seeds removed and chopped DIRECTIONS
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
          <p class="entree-card-text">Ingredients:
  Vegetable oil: You can use your preferred neutral oil for cooking.
  Beef tips: I recommend using top sirloin and cutting it up into pieces. It works best for this method of cooking and will turn out deliciously tender.
  Butter: I prefer using unsalted butter especially when cooking with broth and sauces that contain salt. It simply gives more control over the saltiness of the dish.
  Veggies: Yellow onion and bell pepper are sauteed until soft and add more layers of flavor to the beef gravy.
  Flavor: Fresh garlic and dried thyme enhance the flavor even more.
  All-purpose flour: Added to the vegetables in order to thicken the beef broth into a silky smooth gravy.
  Beef broth: Infuses the beef gravy with. more intense beef flavors.
  Worcestershire sauce: This savory sauce adds an additional splash of umami to the gravy.
  Parsley: Adds some color and flavor. Make sure to add right at the end of cooking.
  Cooked rice: Serve up cooked white rice, brown rice, or your favorite rice recipe.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"Pot Liquor Secret"</p>
        <img src={collardGreens} class="card-img-top" alt="collard greens"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Collard Greens</h5>
          <p class="entree-card-text">Ingredients:
  Fresh Collard Greens Purchase from the Farmers Market or Organic if possible. Make sure that the leaves look healthy, green, and full.
  Onion- Yellow onions will add flavor to the greens.
  Garlic Garlic will compliment the flavor of the onion and greens.
  Red Pepper Flakes Red Pepper flakes will add some slight heat to the greens.
  Fully-Cooked Smoked Turkey Leg- This is the best alternative for those who prefer not to use pork. The smoked turkey leg will add flavor and smokiness to the greens. If you prefer pork, use ham hocks or thick-cut cooked bacon.
  Chicken Broth- Chicken broth creates a richer, more flavorful broth. Water can be used in place of broth or a mixture of chicken broth & water.
  Seasoning( Black pepper, Smoked Applewood salt, and Distilled white vinegar) These seasonings will enhance the flavors of the finished greens. Resulting in a bold, flavorful pot of savory collard greens that are smoky, slightly spicy, and a tad salty and vinegary! Perfection!</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">Grandmomma's Way Like No Other</p>
        <img src={macCheese} class="card-img-top" alt="mac and cheese"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Macaroni and Cheese</h5>
          <p class="entree-card-text">ngredients
  8 to 10 ounces elbow macaroni, ½ cup whole milk
  1 (12-ounce) can evaporated milk, 2 eggs, lightly beaten, 1½ teaspoons white pepper
  1½ teaspoons granulated sugar, ½ teaspoon salt or to taste, ½ cup (1 stick) butter, cut into small pieces
  2 tablespoons sour cream, ½ pound Velveeta, cut into small chunks
  8 ounces shredded Colby-Jack cheese or 4 ounces Colby and 4 ounces Monterey Jack
  4 ounces shredded sharp cheddar cheese, 1 cup shredded mild cheddar cheese
  Instructions
  Preheat oven to 350º. Bring large pot of water to boil and then salt generously. Cook macaroni just shy of package directions, al dente. Drain well and place in 9" by 13" baking dish or pan.
  In same pasta pot, whisk together whole milk, evaporated milk, eggs, salt, pepper and sugar until combined. Pour mixture over cooked macaroni in pan.
  Add butter, sour cream, Velveeta, Colby-Jack and sharp cheddar cheeses. Stir to combine well and top evenly with shredded mild cheddar.
  Bake for 35 to 40 minutes until bubbly and lightly browned on top. Let rest 10 minutes or so before serving. Enjoy!</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"No Marshmallows In This Dish"</p>
        <img src={candiedYams} class="card-img-top" alt="candied yams"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Candied Yams</h5>
          <p class="entree-card-text">Sweet potatoes: The main ingredient for this dish are sweet potatoes. When buying sweet potatoes, make sure you choose medium-large-sized sweet potatoes that are firm and without bruises or cracks.
  Butter: Unsalted butter sets the base for the candied glaze and it gives these candied yams so much flavor.
  Granulated sugar: Granulated sugar works best for this recipe. It adds the sweetness required for candied yams.  Brown sugar works also but can make the sauce stickier.
  Heavy whipping cream: Heavy whipping cream creates a creamy and rich syrup.
  Cinnamon: Cinnamon has a slightly sweet, woodsy, and citrusy flavor with a hint of warmth. It is the perfect addition to candied yam!
  Nutmeg: Nutmeg is known for adding aroma and flavor to both sweet and savory dishes. It has a nutty and warm flavor that resembles clove.
  Clove: Clove has a prominent, slightly sweet, and bitter flavor. It also adds warmth to the dish.
  Real maple: Real maple has a beautiful aroma. It has a distinct caramel-like and sweet flavor.
  Vanilla extract: Vanilla extract adds a depth of flavor. However, it is an optional ingredient, and you can skip it if you don’t like it or have any on hand.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="entree-card">
      <p class="entree-card-text">"No Basic Flavor Here"</p>
        <img src={greenBeans} class="card-img-top" alt="green beans"/>
        <div class="entree-card-body">
          <h5 class="entree-card-title">Southern Green Beans</h5>
          <p class="entree-card-text">Ingredients
  6 slices thick cut bacon ( cut into 1/2 inch pieces), 1 medium yellow onion (diced, about 1 cup)
  3 cloves garlic (minced), 1/2 teaspoon fine sea salt, 1/2 teaspoon ground black pepper
  1/4 teaspoon crushed red pepper flakes, 1 1/2 pounds baby potatoes (quartered)
  1 pound green beans (washed with ends trimmed), 4 Tablespoons butter (divided)
  4 cups chicken broth
  Instructions
  Lightly spray the bottom of a large dutch oven with cooking spray, then spread the bacon slices over the bottom of the pot in an even layer. Turn the heat to medium and cook the bacon until crispy (about 8-10 minutes). Remove the bacon from the pot using a slotted spoon. Leave about 2 Tablespoons of bacon grease in the pot, and discard the rest.
  Add the diced onion to the pot and cook it in the bacon grease until the onion is soft and translucent (about 5 minutes).
  Add the minced garlic and red pepper flakes to the onion and cook until aromatic (30-60 seconds).
  Place the trimmed beans and quartered potatoes in the pot, and pour in the chicken broth. Add half of the cooked bacon pieces (reserve the rest for later) and 2 Tablespoons of butter. Stir to mix (moving the beans and potatoes around so that everything is covered with broth).
  Cover with a fitted lid and turn the heat up to bring to just a boil. Once boiling, reduce the heat to medium-low. Keep covered and simmer until the beans are tender and the potatoes are fork tender (about 25-30 minutes).
  Reserve 1/4 cup of the broth, then carefully drain the remaining broth (leaving the green beans and potatoes in the pot). 
  Add the remaining 2 Tablespoons of butter, the reserved bacon, salt, pepper, and the reserved broth to the pot. Gently toss the beans and potatoes to coat in butter and seasonings. Transfer to a serving dish and enjoy.</p>
        </div>
      </div>
    </div>
  </div>   
    )
  }
  

export default entreeList;