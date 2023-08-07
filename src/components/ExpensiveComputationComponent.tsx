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
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setIsToggled(!isToggled)}>
        Toggle
      </button>
      {isToggled && <h2>{computedValue}</h2>}
    </div>
  );
};

export default ExpensiveComputationComponent;

