import { useState } from "react";

const AllItems = (props) => {
  console.log(props);
  return props.items && props.items.length ? (
    props.items.map((e) => {
      console.log(e);
      return (
        <div className="items-container" key={e._id}>
          <h2>{e.title}</h2>
        </div>
      );
    })
  ) : (
    <p>Loading...</p>
  );
};

export default AllItems;
