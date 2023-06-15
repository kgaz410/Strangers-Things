import { useState } from "react";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";

const AllItems = (props) => {
  console.log(props);
  return (
    <div id="all-Items-Container">
      {props.items && props.items.length ? (
        props.items.map((e) => {
          return (
            <div key={e._id} className="item-container">
              <Link className="link-text" to={`/post/${e._id}`}>
                {e.title}{" "}
              </Link>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AllItems;
