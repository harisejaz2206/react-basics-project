import React, { useState, useCallback } from 'react';

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(() => {
    console.log(`Searching for: ${query}`);
  }, [query]);

  return (
    <div className="flex items-center justify-center p-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow w-64 p-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
      />
      <button 
        onClick={handleSearch}
        className="p-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
