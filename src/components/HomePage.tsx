import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">React Hooks Examples</h1>
      
      <Link to="/usedebugvalue" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useDebugValue Example
      </Link>
      <Link to="/usecontext" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useContext Example
      </Link>
      <Link to="/useeffect" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useEffect Example
      </Link>
      <Link to="/usestate" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useState Example
      </Link>
      <Link to="/usereducer" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useReducer Example
      </Link>
      <Link to="/usecallback" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useCallback Example
      </Link>
      <Link to="/useref" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useRef Example
      </Link>
      <Link to="/useDeferredValue" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useDeferredValue Example
      </Link>
      <Link to="/useImperativeHandle" className="btn m-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        useImperativeHandle Example
      </Link>

      {/* Similarly, add more links for other hooks */}
    </div>
  );
}

export default HomePage;
