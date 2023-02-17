import React from 'react';

function SearchBar({handleSearch, search}) {
    return (
        <div >
            <label className="font-serif text-clover text-xl mr-[5px]" htmlFor="search">Search Products:</label>
            <input className="w-[275px]"
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