import React, { useRef } from 'react';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import { ThemeProvider } from './components/ThemeContext';
import ThemedButton from './components/ThemedButton';
import CounterWithReducer from './components/CounterWithReducer';
import SearchBox from './components/SearchBox';
import ExpensiveComputationComponent from './components/ExpensiveComputationComponent';
import FocusInput from './components/FocusInput';
import useCurrentTime from './components/useCurrentTime';
import DeferredText from './components/DeferredText';
import FancyInput from './components/FancyInput';
import ImperativeHandleDemo from './components/ImperativeHandleDemo';
import ChildWithHandle from './components/ChildWithHandle';

const App: React.FC = () => {
  const userId = 4;  
  const currentTime = useCurrentTime();
  const childRef = useRef<any>(null);

  const handleClick = () => {
    if (childRef && childRef.current && childRef.current.alertSomething) {
      childRef.current.alertSomething();
    }
  };
  


  return (
    <div className="App bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8">Welcome to the App</h1>

      {/* useDebugValue */}
      <h2 className="text-2xl mb-4">Current time: {currentTime.toLocaleTimeString()}</h2>

      {/* useContext */}
      <ThemeProvider>
        <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">useContext() - Example</h2>
          <h2 className="text-xl font-semibold mb-4">Theme Toggle Demo</h2>
          <ThemedButton />
        </div>
      </ThemeProvider>

      {/* useEffect */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">UseEffect() - UserProfile.tsx</h2>
        <UserProfile userId={userId} />
      </div>

      {/* useState */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">useState()</h2>
        <h2 className="text-xl font-semibold mb-4">Counter Demo</h2>
        <Counter />
      </div>

      {/* useReducer */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Counter with useReducer:</h2>
        <CounterWithReducer />
      </div>

      {/* useCallback */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">SearchBox with useCallback:</h2>
        <SearchBox />
      </div>

      {/* useMemo */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Expensive computation with useMemo:</h2>
        <ExpensiveComputationComponent />
      </div>

      {/* useRef */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Focus input with useRef:</h2>
        <FocusInput />
      </div>

      {/* useImperativeHandle 
      <div>
        <h2>useImperativeHandle Demo:</h2>
        <ChildWithHandle ref={childRef} />
        <button onClick={handleClick}>Call child method</button>
      </div>
      */}


      {/* useDeferredValue */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <DeferredText />
      </div>

      {/* useImperativeHandle */}
      <div className="p-4 mb-8 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">useImperativeHandle Demo:</h2>
        <ChildWithHandle ref={childRef} />
        <button className="ml-4 p-2 bg-blue-500 text-white" onClick={handleClick}>Focus the input</button>
      </div>

    </div>
  );
}

export default App;
