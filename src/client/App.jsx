import { useState } from "react";
import "./App.css";
import entreeList from "./components/views/entreeList";
import dessertList from "./components/views/dessertList";


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
