import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className={`transition duration-300 ease-in-out py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${theme === 'light' ? 'bg-gray-300 hover:bg-gray-400 text-black' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
    >
      Toggle Theme
    </button>
  );
};

export default ThemedButton;
