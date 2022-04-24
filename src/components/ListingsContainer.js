import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchedItem }) {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  let list = searchedItem === "" ? [...listings] : 
    listings.filter(listing => listing.description.toLowerCase().includes(searchedItem.toLowerCase()))

  function handleRemovingFromList(deletedListing) {
    const updatedListings = listings.filter( listing => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  function renderListings() {
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
        {renderListings()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
