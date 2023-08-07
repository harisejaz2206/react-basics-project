import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import ThemedButton from './components/ThemedButton';
import CounterWithReducer from './components/CounterWithReducer';
import SearchBox from './components/SearchBox';
import ExpensiveComputationComponent from './components/ExpensiveComputationComponent';
import FocusInput from './components/FocusInput';
import useCurrentTime from './components/useCurrentTime';
import DeferredText from './components/DeferredText';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  const userId = 4;  
  const currentTime = useCurrentTime();
  const childRef = useRef<any>(null);

  const handleClick = () => {
    if (childRef && childRef.current && childRef.current.alertSomething) {
      childRef.current.alertSomething();
    }
  };  

  return (
    <div className="App bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8">Welcome to the App</h1>
      <HomePage></HomePage>
      <Routes>
        {/* <Route path='/' element= {<HomePage/>}> </Route> */}
        <Route path='/usecontext' element= {<ThemedButton />}> </Route>
        <Route path='/useeffect' element= {<UserProfile userId={userId} />}> </Route>
        <Route path='/usestate' element= {<Counter />}> </Route>
        <Route path='/usereducer' element= {<CounterWithReducer />}> </Route>
        <Route path='/usecallback' element= {<SearchBox />}> </Route>
        <Route path='/usememo' element= {<ExpensiveComputationComponent />}> </Route>
        <Route path='/useref' element= {<FocusInput />}> </Route>
        <Route path='/usedeferredvalue' element= {<DeferredText />}> </Route>
        {/* <Route path='/useimperativehandle' element= {}> </Route> */}
        </Routes>


      {/* useDebugValue */}
      <h2 className="text-2xl mb-4">Current time: {currentTime.toLocaleTimeString()}</h2>

      
      

    </div>
  );
}

export default App;
