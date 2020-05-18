import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, multiply, divide, reset } from './counter.actions';

export const initialState = 10;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(multiply, ( state, { number } )=> state * number),
  on(divide, ( state, { number }) => state / number),
  on(reset, state => state = initialState )


);

//export this function and not the reducer prevent directs state modifications
export function counterReducer(state, action) { 
  return _counterReducer(state, action);
};