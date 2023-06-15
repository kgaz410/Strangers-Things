import React from "react";
import "./Delete.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2304-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// const TOKEN_STRING_HERE = 'eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9';

function Delete(props) {
 console.log(props)
    // submit function passed in OnSubmit in form below.
    const handleSubmit = async(e) => {
        e.preventDefault()
   
        try {
            const result = await deletePost(props.id); // Passing our async function in from below.
            // console.log(result.data)

            // localStorage.setItem("token", result.data.token) // Storing only key-value pair for token.
            // props.setIsLoggedIn(true)  // Telling program login is true.

            // navigate('/posts')
        } catch (error) {
            console.log(error)
        }

    }






    async function deletePost(postId) {
        try {
            const token = localStorage.getItem("token");
            console.log(token)
            console.log("postId", postId)
            const response = await fetch(`${BASE_URL}/posts/${postId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },

            });  // Outside of fetch starting here.
            const result = await response.json()

            if(result.success === true) {
                const filteredPosts = props.items.filter((singlePost) => {
                    if(singlePost._id !== postId){
                        return singlePost
                    }
                })
    
                props.setItems(filteredPosts)
            }
      
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div id="deletepost">
            

                <button onClick={handleSubmit} type="submit">Delete Post</button>

            
        </div>
    )
}




export default Delete;