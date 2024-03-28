import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";





function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div className="App">
      <navbar>
        
      </navbar>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Juke Joint Classics</h1>
      <div className="card">
      <img src="https://tse3.mm.bing.net/th?id=OIP.kCM-JMMQ265y2zElmG7mlwHaFj&pid=Api&P=0&h=220"/>
      </div>
      <p className="read-the-docs">
        Feeding your Soul with these Southern Home Cooking Recipes!
      </p>
    </div>
  );
}

export default App;
