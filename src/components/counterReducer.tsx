// counterReducer.ts
import { Action, State } from './counterTypes';

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    case 'INCREMENT_BY':
      return { count: state.count + action.payload };
    case 'DECREMENT_BY':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export default counterReducer;
