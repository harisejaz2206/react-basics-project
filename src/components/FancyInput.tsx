// components/FancyInput.tsx

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

interface FancyInputRef {
  focus: () => void;
}

const FancyInput = forwardRef<FancyInputRef, {}>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));

  return <input ref={inputRef} className="border p-2" />;
});

export default FancyInput;
