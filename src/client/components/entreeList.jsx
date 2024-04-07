import React from "react";
import turkeyWings from "../assets/turkeyWings.jpg";
import friedCatfish from "../assets/friedCatfish.jpg";
import friedChicken from "../assets/friedChicken.jpg";
import blackPeas from "../assets/blackPeas.jpg";
import candiedYams from "../assets/candiedYams.jpg";
import collardGreens from "../assets/collardGreens.jpg";
import greenBeans from "../assets/greenBeans.jpg";
import macCheese from "../assets/macCheese.jpg";
import riceGravy from "../assets/riceGravy.jpg"

function EntreeList() {
  return (
    <div className="row row-cols-1 row-cols-sm-3">
      <div className="clearfix">
        <div className="col">
          <div className="entree-card">
            <p className="entree-card-text">"Big Momma's Special"</p>
            <img src={turkeyWings} className="card-img-top" alt="turkey wings"/>
            <div className="entree-card-body">
              <h5 className="entree-card-title">Turkey Wings</h5>
              <p className="entree-card-instructions"><b>How To Make Baked Turkey Wings</b></p>
              <p className="entree-card-instructions">
                Rinse turkey wings, add to a large roasting pan or casserole dish, and pat dry.
                Add the poultry seasoning mixture to the turkey wings and toss until they are well coated. Let sit in the fridge to marinate.
                After letting the dry rub do its magic, top the turkey wings with the onion, green peppers, and garlic then pour the stock and Worcestershire on top.
                Cover and bake until tender, then remove the foil and brown to get that crispy skin. Remove a cup of sauce from the bottom of the wings and stir with cornstarch.
                Then add back in the pan, and get ready to try not to lick the plate!
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="entree-card">
            <p className="entree-card-text">"Auntie's Secret Dish"</p>
            <img src={friedCatfish} className="card-img-top" alt="fried catfish"/>
            <div className="entree-card-body">
              <h5 className="entree-card-title">Fried Catfish</h5>
              <p className="entree-card-ingredients"><b>Ingredients:</b></p>
              <ul className="entree-card-ingredients">
                <li>6 pounds catfish fillets</li>
                <li>1 cup buttermilk</li>
                <li>4 cups vegetable oil or lard for frying</li>
                <li>Cornmeal Mix:</li>
                <li>1 cup all-purpose flour</li>
                <li>2 1/2 cups yellow cornmeal</li>
                <li>2 tablespoons Cajun Seasoning (e.g., Slap Ya Mama Cajun Seasoning)</li>
                <li>1 teaspoon garlic powder or granulated garlic</li>
                <li>2 teaspoons ground black pepper</li>
              </ul>
              <p className="entree-card-instructions"><b>Instructions:</b></p>
              <ol className="entree-card-instructions">
                <li>Rinse fish fillets under cold water, cut into 2-inch wide strips; place in a large bowl.</li>
                <li>Cover fish with buttermilk and mix with hands; cover and refrigerate: let soak for 30 minutes to an hour before frying.</li>
                <li>In a large zip top bag, combine flour, cornmeal, Cajun seasoning, garlic powder, and black pepper.</li>
                <li>Heat oil in a large iron skillet over medium-high heat to about 400 degrees.</li>
                <li>Meanwhile, drain off buttermilk from the fish. Drop 3 to 4 pieces into the cornmeal mixture and coat each piece well.</li>
                <li>Fry fish pieces for 3 to 4 minutes per side, or until golden brown.</li>
                <li>Remove from hot oil and drain on paper towels or brown paper bags.</li>
                <li>Serve hot with tartar sauce or hot sauce.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function EntreeList() {
  return (
    <div className="row row-cols-1 row-cols-sm-3">
      <div className="col">
        <div className="entree-card">
          <p className="entree-card-text">Momma's Heart and Soul</p>
          <img src={friedChicken} className="card-img-top" alt="fried chicken"/>
          <div className="entree-card-body">
            <h5 className="entree-card-title">Fried Chicken</h5>
            <p className="entree-card-ingredients"><b>Ingredients:</b></p>
            <ul className="entree-card-ingredients">
              <li>4 - 5 lb whole chicken cut into 8 pieces (or 4-5 lbs of chicken parts)</li>
              <li>1/2 cup mild hot sauce (e.g., Frank's Red Hot)</li>
              <li>2 1/4 cups all-purpose flour</li>
              <li>1/4 cup cornstarch</li>
              <li>2 1/2 tsp seasoning salt</li>
              <li>1 tsp ground black pepper</li>
              <li>1 tbsp poultry seasoning</li>
              <li>1 tbsp onion powder</li>
              <li>1 tbsp garlic powder</li>
              <li>1 tsp cayenne pepper</li>
              <li>4 cups of peanut oil for frying</li>
            </ul>
            <p className="entree-card-instructions"><b>Instructions:</b></p>
            <ol className="entree-card-instructions">
              <li>Combine 8 cups cold water, 2 tbsp salt, and 4 tbsp sugar. Stir until the salt and sugar dissolve.</li>
              <li>Pour the brine (sugar/salt/water) into the bowl or container with the chicken. Make sure that the chicken is covered with brine.</li>
              <li>Cover the bowl/container, then place in the refrigerator overnight.</li>
              <li>Drain the brine from the bowl, but do not rinse the chicken.</li>
              <li>Place the chicken in a large bowl, then pour the hot sauce all over the chicken.</li>
              <li>Next, combine the all-purpose flour, cornstarch, and all of the seasonings.</li>
              <li>Pour the flour mixture into a large freezer bag, then toss in the chicken wings.</li>
              <li>Shake the bag until the chicken is well coated with flour.</li>
              <li>Remove the chicken from the bag, and shake off any excess flour.</li>
              <li>Let the chicken sit for about 15 minutes before frying to ensure that the flour sticks.</li>
              <li>Now pour the oil into a large skillet, and let it heat until it reaches 350-375 F.</li>
              <li>Carefully add in the chicken, and fry until it's completely cooked throughout and golden brown.</li>
              <li>Place the chicken on a paper towel-lined plate.</li>
            </ol>
            <p>Serve and enjoy!</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="entree-card">
          <p className="entree-card-text">"Good Luck Charm"</p>
          <img src={blackPeas} className="card-img-top" alt="black eye peas"/>
          <div className="entree-card-body">
            <h5 className="entree-card-title">Black Eyed Peas</h5>
            <p className="entree-card-ingredients"><b>Ingredients:</b></p>
            <ul className="entree-card-ingredients">
              <li>1 (16 ounce) package dried black-eyed peas</li>
              <li>6 cups water</li>
              <li>1 medium onion, chopped</li>
              <li>2 cloves garlic, minced</li>
              <li>1 teaspoon salt</li>
              <li>1/2 teaspoon black pepper</li>
              <li>1 teaspoon sugar</li>
              <li>1 ham hock or 2 cups cooked ham, cut into small cubes</li>
              <li>1-2 jalapeno peppers, seeds removed and chopped</li>
            </ul>
            <p className="entree-card-instructions"><b>Instructions:</b></p>
            <ol className="entree-card-instructions">
              <li>Sort and wash peas; place in a large Dutch oven.</li>
              <li>Add remaining ingredients and bring to a boil.</li>
              <li>Cover, reduce heat, and simmer for 1-1 1/2 hours, or until peas are tender.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
function EntreeList() {
  return (
    <div className="row row-cols-1 row-cols-sm-3">
      <div className="col">
        <div className="entree-card">
          <p className="entree-card-text">"All In One"</p>
          <img src={riceGravy} className="card-img-top" alt="rice and gravy"/>
          <div className="entree-card-body">
            <h5 className="entree-card-title">Rice & Gravy</h5>
            <p className="entree-card-ingredients"><b>Ingredients:</b></p>
            <ul className="entree-card-ingredients">
              <li>1 ¼ - 1 ½ pounds top sirloin cut into 1-inch pieces</li>
              <li>Salt and Pepper to taste</li>
              <li>1 ½ tablespoons vegetable oil, divided</li>
              <li>4 tablespoons unsalted butter</li>
              <li>1 cup yellow onion, diced</li>
              <li>½ cup bell pepper, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>½ teaspoon dried thyme</li>
              <li>4 tablespoons all-purpose flour</li>
              <li>3 ½ cups beef broth</li>
              <li>1 tablespoon Worcestershire sauce</li>
              <li>2 tablespoons finely chopped parsley</li>
              <li>Cooked rice for serving</li>
            </ul>
            <p className="entree-card-instructions"><b>Instructions:</b></p>
            <ol className="entree-card-instructions">
              <li>Remove beef from fridge 30 minutes prior to cooking. Pat dry. Season with salt and pepper.</li>
              <li>In a large Dutch oven, heat 1 tablespoon of vegetable oil over medium-high heat. Add in half of the pieces of beef. Sear for about 1 minute, then turn on another side and continue cooking for 1-2 minutes, getting a deep brown color on the beef. Remove beef from pan and set aside.</li>
              <li>Add ½ tablespoon oil to the pan and repeat with remaining beef tips.</li>
              <li>Once the second batch is seared off, take it out of the pan and set aside with the rest of the beef. Reduce heat to medium and add butter. Once it begins to foam, add onions, bell pepper. Season with salt and pepper. Cook until almost tender, about 4 minutes. Add garlic and thyme and cook for an additional minute.</li>
              <li>Sprinkle flour over vegetables. Using a wooden spoon, stir to make sure flour is fully hydrated and coating the vegetables.</li>
              <li>Slowly pour in beef broth, about half cup at a time, scraping the bottom to release the brown bits and stirring constantly to keep the gravy smooth. Do not add broth all at once.</li>
              <li>Increase heat to medium-high and bring to a boil. Add beef tips and any juices. Add Worcestershire sauce and reduce heat to a simmer, allowing beef to finish cooking and gravy to thicken, about 40-50 minutes.</li>
              <li>Stir in parsley and serve over cooked rice.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="entree-card">
          <p className="entree-card-text">"Pot Liquor Secret"</p>
          <img src={collardGreens} className="card-img-top" alt="collard greens"/>
          <div className="entree-card-body">
            <h5 className="entree-card-title">Collard Greens</h5>
            <p className="entree-card-ingredients"><b>Ingredients:</b></p>
            <ul className="entree-card-ingredients">
              <li>Fresh Collard Greens</li>
              <li>Onion</li>
              <li>Garlic</li>
              <li>Red Pepper Flakes</li>
              <li>Fully-Cooked Smoked Turkey Leg or ham hocks or thick-cut cooked bacon</li>
              <li>Chicken Broth or water</li>
              <li>Seasoning (Black pepper, Smoked Applewood salt, and Distilled white vinegar)</li>
            </ul>
            <p className="entree-card-instructions"><b>Instructions:</b></p>
            <ol className="entree-card-instructions">
              <li>Start by pulling and tearing greens away from stems. Take a handful of greens, roll them up, and cut the rolls horizontally into small pieces.</li>
              <li>Add greens to an empty clean sink and wash them, removing all grit, sand, and debris thoroughly with cold water until water becomes clear.</li>
              <li>Rinse the ham hock very well then add to a large pot along with enough water to fully submerge the ham hock then cover with a lid. Cook over medium-high heat for about 45 minutes or until ham hock is near being tender.</li>
              <li>Once the ham hock is almost tender, add greens and about 4-5 additional cups of water (or chicken stock for more flavor) or enough to just barely cover greens to the pot. This will become your pot liquor.</li>
              <li>Add along with the rest of the ingredients to the pot and cook while covered for at least 2 hours or until completely tender. Most water should have evaporated by this point just having enough to barely cover the greens.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
function EntreeList() {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      <div className="col">
        <div className="entree-card">
          <p className="entree-card-text">Grandmomma's Way Like No Other</p>
          <img src={macCheese} className="card-img-top" alt="mac and cheese"/>
          <div className="entree-card-body">
            <h5 className="entree-card-title">Macaroni and Cheese</h5>
            <p className="entree-card-ingredients"><b>Ingredients:</b></p>
            <ul className="entree-card-ingredients">
              <li>8 to 10 ounces elbow macaroni</li>
              <li>½ cup whole milk</li>
              <li>1 (12-ounce) can evaporated milk</li>
              <li>2 eggs, lightly beaten</li>
              <li>1½ teaspoons white pepper</li>
              <li>1½ teaspoons granulated sugar</li>
              <li>½ teaspoon salt or to taste</li>
              <li>½ cup (1 stick) butter, cut into small pieces</li>
              <li>2 tablespoons sour cream</li>
              <li>½ pound Velveeta, cut into small chunks</li>
              <li>8 ounces shredded Colby-Jack cheese or 4 ounces Colby and 4 ounces Monterey Jack</li>
              <li>4 ounces shredded sharp cheddar cheese</li>
              <li>1 cup shredded mild cheddar cheese</li>
            </ul>
            <p className="entree-card-instructions"><b>Instructions:</b></p>
            <ol className="entree-card-instructions">
              <li>Preheat oven to 350ºF. Bring a large pot of water to a boil and then salt generously. Cook macaroni just shy of package directions, al dente. Drain well and place in a 9" by 13" baking dish or pan.</li>
              <li>In the same pasta pot, whisk together whole milk, evaporated milk, eggs, salt, pepper, and sugar until combined. Pour mixture over cooked macaroni in the pan.</li>
              <li>Add butter, sour cream, Velveeta, Colby-Jack, and sharp cheddar cheeses. Stir to combine well and top evenly with shredded mild cheddar.</li>
              <li>Bake for 35 to 40 minutes until bubbly and lightly browned on top. Let rest for 10 minutes before serving. Enjoy!</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="entree-card">
          <p className="entree-card-text">"No Marshmallows In This Dish"</p>
          <img src={candiedYams} className="card-img-top" alt="candied yams"/>
          <div className="entree-card-body">
            <h5 className="entree-card-title">Candied Yams</h5>
            <p className="entree-card-ingredients"><b>Ingredients:</b></p>
            <ul className="entree-card-ingredients">
              <li>Sweet potatoes</li>
              <li>Butter</li>
              <li>Granulated sugar</li>
              <li>Heavy whipping cream</li>
              <li>Cinnamon</li>
              <li>Nutmeg</li>
              <li>Clove</li>
              <li>Real maple syrup</li>
              <li>Vanilla extract (optional)</li>
            </ul>
            <p className="entree-card-instructions"><b>Instructions:</b></p>
            <ol className="entree-card-instructions">
              <li>Scrub, peel, and slice your yams into 1/2 inch rounds. In a medium pot over medium-high heat, combine the sweet potatoes and the rest of the ingredients. Stir the sweet potatoes until coated in the sugar and butter mixture.</li>
              <li>Let it come to a boil. Cover then simmer for about 50 minutes or until the yams are nice and tender when slightly pierced with the tines of a fork or taste. If the yam is still a bit hard, let it cook a bit longer.</li>
              <li>Remove the top then set the stove to medium. Let the cooking liquid come to a boil, stirring occasionally until the cooking liquid reduces about 10 minutes or until the syrup coats the yams.</li>
              <li>Remove the pot with the candied yams from the stove and place them into the oven until you are ready to serve them. These taste best warm.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="entree-card">
          <p className="entree-card-text">"No Basic Flavor Here"</p>
          <img src={greenBeans} className="card-img-top" alt="green beans"/>
          <div className="entree-card-body">
            <h5 className="entree-card-title">Southern Green Beans</h5>
            <p className="entree-card-ingredients"><b>Ingredients:</b></p>
            <ul className="entree-card-ingredients">
              <li>6 slices thick-cut bacon (cut into 1/2 inch pieces)</li>
              <li>1 medium yellow onion, diced (about 1 cup)</li>
              <li>3 cloves garlic, minced</li>
              <li>1/2 teaspoon fine sea salt</li>
              <li>1/2 teaspoon ground black pepper</li>
              <li>1/4 teaspoon crushed red pepper flakes</li>
              <li>1 1/2 pounds baby potatoes, quartered</li>
              <li>1 pound green beans, washed with ends trimmed</li>
              <li>4 tablespoons butter, divided</li>
              <li>4 cups chicken broth</li>
            </ul>
            <p className="entree-card-instructions"><b>Instructions:</b></p>
            <ol className="entree-card-instructions">
              <li>Lightly spray the bottom of a large Dutch oven with cooking spray, then spread the bacon slices over the bottom of the pot in an even layer. Turn the heat to medium and cook the bacon until crispy (about 8-10 minutes). Remove the bacon from the pot using a slotted spoon. Leave about 2 tablespoons of bacon grease in the pot, and discard the rest.</li>
              <li>Add the diced onion to the pot and cook it in the bacon grease until the onion is soft and translucent (about 5 minutes).</li>
              <li>Add the minced garlic and red pepper flakes to the onion and cook until aromatic (30-60 seconds).</li>
              <li>Place the trimmed beans and quartered potatoes in the pot, and pour in the chicken broth. Add half of the cooked bacon pieces (reserve the rest for later) and 2 tablespoons of butter. Stir to mix (moving the beans and potatoes around so that everything is covered with broth).</li>
              <li>Cover with a fitted lid and turn the heat up to bring to just a boil. Once boiling, reduce the heat to medium-low. Keep covered and simmer until the beans are tender and the potatoes are fork-tender (about 25-30 minutes).</li>
              <li>Reserve 1/4 cup of the broth, then carefully drain the remaining broth (leaving the green beans and potatoes in the pot).</li>
              <li>Add the remaining 2 tablespoons of butter, the reserved bacon, salt, pepper, and the reserved broth to the pot. Gently toss the beans and potatoes to coat in butter and seasonings. Transfer to a serving dish and enjoy.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntreeList;