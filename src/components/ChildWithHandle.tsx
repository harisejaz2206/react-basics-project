import React, { forwardRef, useImperativeHandle } from 'react';

// Define the type of the ref object
export interface ChildWithHandleRef {
  alertSomething: () => void;
}

const ChildWithHandle = forwardRef<ChildWithHandleRef, {}>((props, ref) => {
  useImperativeHandle(ref, () => ({
    alertSomething: () => {
      alert("Hello from the Child component!");
    }
  }));

  return <div>I am a child with a handle.</div>
});

export default ChildWithHandle;
