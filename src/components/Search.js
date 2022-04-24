import React from "react";

function Search({search, setSearch}) {  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);

  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
