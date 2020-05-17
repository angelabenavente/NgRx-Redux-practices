import { Action } from '../ngrx-fake/ngrx'; //Import interfaz

export const incrementAction: Action = {
  type: 'INCREMENTS'
};

export const decrementAction: Action = {
  type: 'DECREMENTS'
};

export const multiplyAction: Action = {
  type: 'MULTIPLY',
  payload: 2
};

export const divideAction: Action = {
  type: 'DIVIDE',
  payload: 2
};

export const resetAction: Action = {
  type: 'RESET'
};