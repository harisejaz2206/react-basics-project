import React, { useState, useMemo } from 'react';

const heavyComputation = (num: number) => {
  console.log('Computing...');
  // Simulate a heavy computation
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

const ExpensiveComputationComponent: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const computedValue = useMemo(() => heavyComputation(number), [number]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className="w-64 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-center"
      />
      <button 
        onClick={() => setIsToggled(!isToggled)}
        className="p-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Toggle
      </button>
      {isToggled && <h2 className="text-xl font-bold">{computedValue}</h2>}
    </div>
  );
};

export default ExpensiveComputationComponent;
