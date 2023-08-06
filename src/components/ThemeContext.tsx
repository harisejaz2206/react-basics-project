import React, { createContext, useContext, useState } from 'react';
import ThemedButton from './ThemedButton';

// Define the shape of our context data
interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

const defaultContextData: ThemeContextData = {
  theme: 'light',
  toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextData>(defaultContextData);

// Define the props type for the ThemeProvider
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white min-h-screen'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
