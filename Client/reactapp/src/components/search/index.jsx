import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        setResults(filterData(event.target.value));
    }

    const filterData = (query) => {
        const filteredData = myData.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        return filteredData;
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleInputChange} />
            <ul>
                {results.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
