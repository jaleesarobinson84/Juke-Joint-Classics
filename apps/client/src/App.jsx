import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar"

// Layout/Components Imports
import DessertList from "./components/dessertList";
import EntreeList from "./components/entreeList";
import MealList from "./components/mealList" 
// import Navbar from "./components/Navbar";

const HomePage = () => {
  return (<><h1>Welcome</h1>
  <div className="card">  
  <img src="https://tse3.mm.bing.net/th?id=OIP.kCM-JMMQ265y2zElmG7mlwHaFj&pid=Api&P=0&h=220"/>
  <h1>Juke Joint Classics</h1>
  <p className="img-content">
  "Welcome to the ultimate party feast, where each savory bite is a symphony and every sip is a sensational melody! Get ready to groove with our menu, where flavor meets rhythm and every dish dances on your palate to the beat of the music!"
  </p>
</div></>)
}

const AppShell = () => {
  return (
    <>
      <Navbar /> 
      <Outlet></Outlet>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell></AppShell>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/entrees" element={<EntreeList></EntreeList>}></Route>
          <Route path="/desserts" element={<DessertList></DessertList>}></Route>
          <Route path="/meals" element={<MealList></MealList>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
