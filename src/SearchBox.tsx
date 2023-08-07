import React, { useState, useCallback } from 'react';

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(() => {
    // This is where you would normally interact with an API or a large dataset
    console.log(`Searching for: ${query}`);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
