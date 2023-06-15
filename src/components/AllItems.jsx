import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";


const AllItems = (props) => {
  console.log(props);
  return (
    <div id="all-Items-Container">
      {props.items && props.items.length ? (
        props.items.map((e) => {
          return (
            <div key={e._id} className="item-container">
              <Link className="link-text" to={`/post/${e._id}`}> {e.title}{" "} </Link>
              <Delete id={e._id} items={props.items} setItems={props.setItems}/>
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
