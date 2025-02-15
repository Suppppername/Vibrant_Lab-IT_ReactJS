import React from 'react';

// Search Bar Component
function SearchBar({ searchQuery, setSearchQuery, searchAttribute, setSearchAttribute }) {
    return (
        <div style={searchContainer}>
            <select
                style={dropdownStyle}
                value={searchAttribute}
                onChange={(e) => setSearchAttribute(e.target.value)}
            >
                <option value="all">All</option>
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="position">Position</option>
                <option value="department">Department</option>
                <option value="age">Age</option>
                <option value="salary">Salary</option>
                <option value="experience">Experience</option>
            </select>

            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search by ${searchAttribute === "all" ? "any attribute" : searchAttribute}...`}
                style={inputStyle}
            />
        </div>
    );
}

// Styles
const searchContainer = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
};

const dropdownStyle = {
    padding: '8px',
    fontSize: '14px',
};

const inputStyle = {
    padding: '8px',
    fontSize: '14px',
    flex: '1',
};

export default SearchBar;
