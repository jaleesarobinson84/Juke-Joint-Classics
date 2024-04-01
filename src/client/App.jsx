import { useState } from "react";
import "./App.css";
import entreeList from "./views/layouts/entreeList";
import dessertList from "./views/layouts/dessertList";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

   <entreeList />
   <dessertList />
  
    </div>
  );
}

export default App;
