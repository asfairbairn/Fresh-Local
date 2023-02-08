import React from 'react';

function SearchBar({handleSearch, search}) {
    return (
        <div >
            <label htmlFor="search">Search Products:</label>
            <input
                value={search}
                type="text"
                id="search"
                placeholder="Search products by name..."
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar