import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-6">
      <input 
        ref={inputRef} 
        type="text" 
        className="w-64 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <button 
        onClick={handleFocus}
        className="p-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Focus the input
      </button>
    </div>
  );
};

export default FocusInput;
