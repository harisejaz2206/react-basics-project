import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import { ThemeProvider } from './components/ThemeContext';
import ThemedButton from './components/ThemedButton';
import CounterWithReducer from './components/CounterWithReducer';

const App: React.FC = () => {
  const userId = 3;  // As before, this is a demonstration with a fixed userId.

  return (
    <div className="App">
      <h1>Welcome to the App</h1>

      <ThemeProvider>
        <div>
          <h2>Theme Toggle Demo</h2>
          <ThemedButton />
        </div>
      </ThemeProvider>

      <div>
        <h2>UseEffect() - UserProfile.tsx</h2>
        <UserProfile userId={userId} />
      </div>

      <div>
        <h2>Counter Demo</h2>
        <Counter />
      </div>

      <h2>Counter with useReducer:</h2>
      <CounterWithReducer />
    </div>
  );
}

export default App;
