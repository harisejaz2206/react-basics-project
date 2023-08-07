// counterTypes.ts

// Actions definitions
export type Action = 
  { type: 'INCREMENT' } | 
  { type: 'DECREMENT' } |
  { type: 'RESET' } |
  { type: 'SET', payload: number } |
  { type: 'INCREMENT_BY', payload: number } |
  { type: 'DECREMENT_BY', payload: number };

// State shape
export interface State {
  count: number;
}
