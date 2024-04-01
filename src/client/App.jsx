import { useState } from "react";
import "./App.css";
import entreeList from "./components/entreeList";
import dessertList from "./components/dessertList";


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
