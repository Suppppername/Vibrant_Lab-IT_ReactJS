import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="search" style={{ marginRight: '0.5rem' }}>
                Search:
            </label>
            <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to filter..."
            />
        </div>
    );
}

export default SearchBar;
