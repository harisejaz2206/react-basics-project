// components/DeferredText.tsx

import React, { useState, useDeferredValue } from 'react';

const DeferredText: React.FC = () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text); // defer updates

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">useDeferredValue - Example</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="border p-2 mr-4"
        placeholder="Type something..."
      />
      <p className="mt-2">Deferred Value (may update a bit later): {deferredText}</p>
    </div>
  );
};

export default DeferredText;
