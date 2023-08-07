// components/ImperativeHandleDemo.tsx

import React, { useRef } from 'react';
import FancyInput from './FancyInput';

const ImperativeHandleDemo: React.FC = () => {
  const fancyInputRef = useRef<any>(null);

  const handleClick = () => {
    fancyInputRef.current.focus();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">useImperativeHandle - Example</h2>
      <FancyInput ref={fancyInputRef} />
      <button className="ml-4 p-2 bg-blue-500 text-white" onClick={handleClick}>Focus the input</button>
    </div>
  );
};

export default ImperativeHandleDemo;
