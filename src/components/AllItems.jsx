import { useState } from "react";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";

const AllItems = (props) => {
  console.log(props);
  return props.items && props.items.length ? (
    props.items.map((e) => {
      return (
        <div id="all-Items-Container" key={e._id}>
          <div className="item-container">
            <Link to={`/post/${e._id}`}>{e.title}</Link>

            {/* <SingleItem description={description} /> */}
          </div>
        </div>
      );
    })
  ) : (
    <p>Loading...</p>
  );
};

export default AllItems;
