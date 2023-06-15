import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


function Register(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // useNavigate('/home'); need to make offical homepage

    // submit function passed in OnSubmit in form below.
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(username, password)
        try {
            const result = await registerUser(); // Passing our async function in from below.
            console.log(result.data)

            localStorage.setItem("token", result.data.token) // Storing only key-value pair for token.
            props.setIsLoggedIn(true)  // Telling program login is true.

        } catch (error) {
            console.log(error)
        }

    }

    async function registerUser() {
        try {
            const response = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                       
                    }
                })
            });  // Outside of fetch starting here.
            const result = await response.json()
            return result;
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:
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