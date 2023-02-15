import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        // chamar a função de filtrar dados
        setResults(filterData(event.target.value));
    }

    const filterData = (query) => {
        // filtrar os dados com base na consulta do usuário
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
