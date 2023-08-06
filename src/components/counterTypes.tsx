// counterTypes.ts

// Actions definitions
export type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// State shape
export interface State {
  count: number;
}
