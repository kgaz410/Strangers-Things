import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Message(props) {
  // const [token, setToken] = useState("");
  const [newMessage, setNewMessage] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createMessage(props.id); // Passing our async function in from below.
      // console.log(result.data);

  
    } catch (error) {
      console.log(error);
    }
  };

  async function createMessage(postId) {
    try {
      if(props.isLoggedIn) {
        const response = await fetch(
          `${BASE_URL}/posts/${postId}/messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              message: {
                content: newMessage,
              },
            }),
          }
        ); // Outside of fetch starting here.
        const result = await response.json();
        setNewMessage(result.messages)
       
        return result;


      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Message Author</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="messages">Send a message to the Author
        <input
        type="text"
        value={newMessage}
        onChange={(e) => {
          console.log(e.target.value);
          setNewMessage(e.target.value)
        }}
        />
        </label>
        {/* <textarea id="messages" name="messages" rows="10" cols="30"></textarea> */}

        <button onSubmit={handleSubmit} id="message-button" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Message;
