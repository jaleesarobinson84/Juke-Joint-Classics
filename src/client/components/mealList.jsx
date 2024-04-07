function MealList() {
  return (
    <div className="row row-cols-1 row-cols-sm-3">
      <div className="clearfix">
        <div className="col">
          <div className="meal-card">
            <p className="meal-card-text">"Infamous 'Itis' Meal"</p>
            <img src={turkeyMeal} className="card-img-top" alt="turkey wings"/>
            <div className="meal-card-body">
              <h5 className="meal-card-title">Turkey Wings, Rice and Gravy, and Green Beans, slice of sweet potato pie</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="meal-card">
            <p className="meal-card-text">"Friday Fish Fry Special"</p>
            <img src={catfishMeal} className="card-img-top" alt="rice and gravy"/>
            <div className="meal-card-body">
              <h5 className="meal-card-title">Fried Catfish, black eyed peas and collard greens with banana pudding</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="meal-card">
            <p className="meal-card-text">"Grandmomma's Sunday Dinner"</p>
            <img src={chickenMeal} className="card-img-top" alt="green beans"/>
            <div className="meal-card-body">
              <h5 className="meal-card-title">Fried Chicken, Macaroni and Cheese, collard greens, slice of pecan pie</h5>
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default MealList;