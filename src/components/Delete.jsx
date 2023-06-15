import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN_STRING_HERE = 'eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9';

function Delete() {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [deliver, setDeliver] = useState(false);

  

    // submit function passed in OnSubmit in form below.
    const handleSubmit = async(e) => {
        e.preventDefault()
   
        try {
            const result = await createPost(); // Passing our async function in from below.
            // console.log(result.data)

            // localStorage.setItem("token", result.data.token) // Storing only key-value pair for token.
            // props.setIsLoggedIn(true)  // Telling program login is true.

            // navigate('/posts')
        } catch (error) {
            console.log(error)
        }

    }

    async function deletePost() {
        try {
            const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${TOKEN_STRING_HERE}`
                },

            });  // Outside of fetch starting here.
            const result = await response.json()


            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div id="createpost">
            <form onSubmit={handleSubmit} id="createform">
                <label className="createlabels">Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setTitle(e.target.value);
                        }}
                    />
                </label>

                <label className="createlabels">Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setDescription(e.target.value);
                        }}
                    />
                </label>
                
                <label className="createlabels">Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setPrice(e.target.value);
                        }}
                    />
                </label>
                
                <label className="createlabels">Will I Deliver?:
                    <input
                        type="checkbox"
                        value={deliver}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setDeliver(e.target.value);
                        }}
                    />
                </label>







                <button type="submit">Create New Post</button>

            </form>
        </div>
    )
}




export default Delete;