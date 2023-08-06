import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 font-bold text-gray-700">Counter App</h2>
        <p className="text-xl mb-4 text-gray-600">Current Count: <span className="font-bold">{count}</span></p>
        <div className="flex space-x-4">
          <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Increment
          </button>
          <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">
            Decrement
          </button>
          <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
