import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllItems from "./components/AllItems";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import SingleItem from "./components/SingleItem";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Create from "./components/Create";

const COHORT_NAME = "2304-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [singleItemId, setSingleItemId] = useState([]);

  // This functions keeps the user logged so they can move from page to page without being logged out.
useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setIsLoggedIn(true)
  }
}, []);



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        console.log("this is the result")
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
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/posts" element={<AllItems items={items} setItems={setItems}/>} />
        <Route path="/post/:id" element={<SingleItem items={items} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/create-post" element={<Create isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
