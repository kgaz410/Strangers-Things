import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllItems from "./components/AllItems";
import NavBar from "./components/NavBar";
import Register from "./components/Register";


const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        console.log(result);

        setItems(result.data.posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
   
  



      <AllItems items={items} />

      <Routes> 
      {/* Need to add element={<Name to each/>} */}
        <Route path="/home"/> 
        <Route path="/posts" />
        <Route path="/login" />
        <Route path="/register" element={<Register  setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes>

    </div>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 );
}

export default App;
