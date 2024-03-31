import React from "react";

const Desserts = () => {
  return (
    <div>
      <div>
        <h3>Banana Pudding</h3>
        <img src={require('../public/Images/images.jsx/Banana Pudding.jpg')} alt="Banana Pudding" />

        <p>Description and details about Banana Pudding...</p>
      </div>
      <div>
        <h3>Sweet Potato Pie</h3>
        <img src={require('../public/Images/images.jsx/Sweet Potato Pie.jpg')} alt="Sweet Potato Pie" />
        <p>Description and details about Sweet Potato Pie...</p>
      </div>
      <div>
        <h3>Pecan Pie</h3>
        <img src={require('../public/Images/images.jsx/Pecan Pie.jpg')} alt="Pecan Pie" />
        <p>Description and details about Pecan Pie...</p>
      </div>
    </div>
  );
};

export default Desserts;
