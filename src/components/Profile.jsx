import React from "react";
import { useState, useEffect } from "react";

const COHORT_NAME = "2304-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN_STRING_HERE = 'eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9';

function Profile() {
    // const [message, setMessage] = useState("")

useEffect(() => {
    async function userProfile() {
        try {
          const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
            });
    
           // Outside of fetch starting here.
          const result = await response.json();
          console.log(result.data.posts.message);
        //   setMessage(result.data.posts.message)
          return result;
        } catch (error) {
          console.log(error);
        }
      }
    userProfile();
}, []);


  return (
    <div>
      <h1>Profile </h1>
        <p></p>
      <h3>Messages</h3>


    
 
    </div>
  );
}

export default Profile;