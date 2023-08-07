import { useState, useEffect, useDebugValue } from 'react';

const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useDebugValue(time.toLocaleTimeString());

  return time;
};

export default useCurrentTime;
