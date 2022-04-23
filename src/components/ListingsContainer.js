import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  function handleRemovingFromList(deletedListing) {
    const updatedListings = listings.filter( listing => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  function renderListings(list) {
    return list.map(item => {
      return (
        <ListingCard 
          key={item.id} 
          listing={item} 
          handleRemovingFromList={handleRemovingFromList}
        />
      )
    })
  } 

  return (
    <main>
      <ul className="cards">
        {renderListings(listings)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
