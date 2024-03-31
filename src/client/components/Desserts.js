import React from "react";
import PecanPie from "./PecanPie";
import BananaPudding from "./BananaPudding";
import SweetPotatoPie from "./SweetPotatoPie";

const Desserts = () => {
  return (
    <div>
      <h2>Desserts</h2>
      <ul>
        <li><PecanPie /></li>
        <li><BananaPudding /></li>
        <li><SweetPotatoPie /></li>
      </ul>
    </div>
  );
};

export default Desserts;

