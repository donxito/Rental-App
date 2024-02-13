import { useState } from "react";

import "./Search.css";


function Search({ onSearch }) {

    const [search, setSearch] = useState("");
  
    const handleSearch = (event) => {
        setSearch(event.target.value);
        onSearch(event.target.value);
    };


    return (
        <input className="search-input"
        type="text"
        placeholder="Search for a city..."
        value={search}
        onChange={handleSearch}
        />

    )
}


export default Search;