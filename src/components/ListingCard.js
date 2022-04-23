import React, { useState } from "react";

function ListingCard({listing, handleRemovingFromList}) {

  const { id, description, image, location } = listing

  const[isBtnClicked, setIsBtnClicked] = useState(false)

  let handleClick = () => setIsBtnClicked(!isBtnClicked)

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => handleRemovingFromList(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"https://via.placeholder.com/300x300"} />
      </div>
      <div className="details">
        {isBtnClicked ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
