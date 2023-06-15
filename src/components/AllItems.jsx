import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";


const AllItems = (props) => {
  console.log(props);
  return props.items && props.items.length ? (
    props.items.map((e) => {
      return (
        <div id="all-Items-Container" key={e._id}>
          <div className="item-container">
            <Link to={`/post/${e._id}`}>{e.title}</Link>
            <Delete id={e._id} items={props.items} setItems={props.setItems}/>
          </div>
        </div>
      );
    })
  ) : (
    <p>Loading...</p>
  );
};

export default AllItems;
