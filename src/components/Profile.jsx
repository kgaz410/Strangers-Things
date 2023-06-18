import React from "react";
import { useState, useEffect } from "react";
import "./Profile.css";

const COHORT_NAME = "2304-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Profile() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function userProfile() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        // Outside of fetch starting here.
        const result = await response.json();
        console.log(result.data.messages);
        setMessages(result.data.messages);
        return result;
      } catch (error) {
        console.log(error);
      }
    }
    userProfile();
  }, []);

  return (
    <div className="message-container">
      <div className="profileTag">
        <h1>Profile</h1>
      </div>
      <div id="messageBox">
        <p></p>
        <h2>Messages</h2>
        {messages.length ? (
          messages.map((e) => {
            return (
              <div key={e._id} className="profileMessages">
                {e.content}
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
