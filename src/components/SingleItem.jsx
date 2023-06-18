import { useParams, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Message from "./Messages";
import "./SingleItem.css";

const COHORT_NAME = "2304-ftb-et-web-ft";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

const SingleItem = (props) => {
  const [filteredItem, setFilteredItem] = useState(null);

  console.log(props.items);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const foundItem = props.items.find((e) => {
      if (e._id === id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(foundItem);
    if (foundItem) {
      setFilteredItem(foundItem);
    } else {
      setFilteredItem(null);
    }
  }, [props.items]);

  return (
    <div className="single-item-container">
      {filteredItem && filteredItem.title ? (
        <div>
          <h2>{filteredItem.title}</h2>
          <p>{filteredItem.author.username}</p>
          <p>{filteredItem.description}</p>
          <p>{filteredItem.price}</p>
          <p>{filteredItem.willDeliver}</p>
          <>
            <Message isLoggedIn={props.isLoggedIn} id={filteredItem._id} />
          </>
        </div>
      ) : null}
    </div>
  );
};

export default SingleItem;
