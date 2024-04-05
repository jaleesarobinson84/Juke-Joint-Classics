import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar"




function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div className="App">
      <Navbar /> 
      <h1>Welcome</h1>
      <div className="card">  
      <img src="https://tse3.mm.bing.net/th?id=OIP.kCM-JMMQ265y2zElmG7mlwHaFj&pid=Api&P=0&h=220"/>
      <h1>Juke Joint Classics</h1>
      <p className="img-content">
      "Welcome to the ultimate party feast, where each savory bite is a symphony and every sip is a sensational melody! Get ready to groove with our menu, where flavor meets rhythm and every dish dances on your palate to the beat of the music!"

<Router>
  <switch>
    <Route path="/">
      <DessertList />
      <EntreeList />
      <MediaList />
    </Route>
  </switch>
</Router>




      </p>
    </div>
    </div>
  );
}

export default App;
