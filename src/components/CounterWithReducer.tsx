// CounterWithReducer.tsx
import React, { useReducer } from 'react';
import counterReducer from './counterReducer';
import { State, Action } from './counterTypes';

const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })} className="bg-blue-500 text-white py-1 px-4 rounded mr-2">Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} className="bg-red-500 text-white py-1 px-4 rounded">Decrement</button>
    </div>
  );
}

export default CounterWithReducer;
