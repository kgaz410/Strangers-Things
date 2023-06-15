import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Message(props) {
  const [token, setToken] = useState("");
  const [newMessage, setNewMessage] = useState("");
  // useNavigate('/posts');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const result = await loginUser(); // Passing our async function in from below.
      console.log(result.data);

      localStorage.setItem("token", result.data.token); // Fetching only key-value pair for token for the login.
      //   props.setIsLoggedIn(true);
      // Telling program login is true.
      setToken(result.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  async function createMessage() {
    try {
      const response = await fetch(
        `${BASE_URL}/posts/5e8929ddd439160017553e06/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: {
              content: { newMessage },
            },
          }),
        }
      ); // Outside of fetch starting here.
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  createMessage();
  return (
    <div>
      <h1>Message Author</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input
            id="message-box"
            type="textarea"
            value={newMessage}
            onChange={(e) => {
              console.log(e.target.value);
              setNewMessage(e.target.value);
            }}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Message;
