import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN_STRING_HERE = 'eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9';

function Create() {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [deliver, setDeliver] = useState(false);

  

    // submit function passed in OnSubmit in form below.
    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(username, password)
        try {
            const result = await registerUser(); // Passing our async function in from below.
            console.log(result.data)

            localStorage.setItem("token", result.data.token) // Storing only key-value pair for token.
            props.setIsLoggedIn(true)  // Telling program login is true.

            navigate('/posts')
        } catch (error) {
            console.log(error)
        }

    }

    async function createPost() {
        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${TOKEN_STRING_HERE}`
                },
                body: JSON.stringify({
                    post: {
                       title: title,
                       description: description,
                       price: price,
                       willDeliver: deliver
                    }
                })
            });  // Outside of fetch starting here.
            const result = await response.json()

            // set states
            return result;
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setUsername(e.target.value);
                        }}
                    />
                </label>

                <label>Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setPassword(e.target.value);
                        }}
                    />
                </label>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}




export default Register;