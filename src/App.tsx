import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import { ThemeProvider } from './components/ThemeContext';
import ThemedButton from './components/ThemedButton';
import CounterWithReducer from './components/CounterWithReducer';
import SearchBox from './SearchBox';
import ExpensiveComputationComponent from './components/ExpensiveComputationComponent';
import FocusInput from './components/FocusInput'; // Import the new component

const App: React.FC = () => {
  const userId = 3;  // As before, this is a demonstration with a fixed userId.

  return (
    <div className="App">
      <h1>Welcome to the App</h1>

      {/* useContext */}
      <ThemeProvider>
        <div>
          <h2>Theme Toggle Demo</h2>
          <ThemedButton />
        </div>
      </ThemeProvider>

      {/* useEffect */}
      <div>
        <h2>UseEffect() - UserProfile.tsx</h2>
        <UserProfile userId={userId} />
      </div>

      {/* useState */}
      <div>
        <h2>Counter Demo</h2>
        <Counter />
      </div>

      {/* useReducer */}
      <div>
        <h2>Counter with useReducer:</h2>
        <CounterWithReducer />
      </div>

      {/* useCallback */}
      <div>
        <h2>SearchBox with useCallback:</h2>
        <SearchBox />
      </div>

      {/* useMemo */}
      <div>
        <h2>Expensive computation with useMemo:</h2>
        <ExpensiveComputationComponent />
      </div>

      {/* useRef */}
      <div>
        <h2>Focus input with useRef:</h2>
        <FocusInput />
      </div>

    </div>
  );
}

export default App;
