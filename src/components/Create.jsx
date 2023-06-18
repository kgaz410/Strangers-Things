import React from "react";
import { useState } from "react";
import "./Create.css"
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2304-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


function Create(props) {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [deliver, setDeliver] = useState(false);
   const navigate = useNavigate();

    // submit function passed in OnSubmit in form below.
    const handleSubmit = async(e) => {
        e.preventDefault()
   
        try {
            const result = await createPost(); // Passing our async function in from below.


            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }






    async function createPost() {
        try {
            if(props.isLoggedIn) {
                const token = localStorage.getItem("token");
                const response = await fetch(`${BASE_URL}/posts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
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
    
                setTitle(result.title)
                setDescription(result.description)
                setPrice(result.price)
                setDeliver(result.willDeliver)
                console.log(result)
                return result;
            }
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div id="createpost">
            <form onSubmit={handleSubmit} id="createform">
                <h1 id="newpost">New Post Form</h1>
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







                <button id="create-button"type="submit">Create New Post</button>

            </form>
        </div>
    )
}




export default Create;