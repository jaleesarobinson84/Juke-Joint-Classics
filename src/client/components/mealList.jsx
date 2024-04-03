import chickenMeal from "../assets/chickenMeal.jpg";
import turkeyMeal from "../assets/turkeyMeal.jpg";
import catfishMeal from "../assets/catfishMeal.jpeg";

function mealList() {
  return (
    <div class="row row-cols-1 row-cols-sm-3">
    <div class="col">
      <div class="meal-card">
      <p class="meal-card-text">"Infamous 'Itis' Meal"</p>
        <img src={turkeyMeal} class="card-img-top" alt="turkey wings"/>
        <div class="meal-card-body">
          <h5 class="meal-card-title">Turkey Wings, Rice and Gravy, and Green Beans, slice of sweet potato pie</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="meal-card">
      <p class="meal-card-text">"Friday Fish Fry Special"</p>
        <img src={catfishMeal} class="card-img-top" alt="rice and gravy"/>
        <div class="meal-card-body">
          <h5 class="meal-card-title">Fried Catfish, black eyed peas and collard greens with banana pudding</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="meal-card">
      <p class="meal-card-text">"Grandmomma's Sunday Dinner"</p>
        <img src={chickenMeal} class="card-img-top" alt="green beans"/>
        <div class="meal-card-body">
          <h5 class="meal-card-title">Fried Chicken, Macaroni and Cheese, collard greens, slice of pecan pie</h5>
        </div>
      </div>
    </div>
  </div>   
    )
  }
  







export default mealList