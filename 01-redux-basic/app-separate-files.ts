import { Action } from './ngrx-fake/ngrx';
import {
    incrementAction,
    decrementAction,
    multiplyAction,
    divideAction,
    resetAction
} from './counter/counter.actions';

function reducer( state = 10, action: Action ) {
  
  switch ( action.type ) { // better use switch in reducer
    case 'INCREMENTS':
      return state += 1;

    case 'DECREMENTS':
        return state -= 1;
  
    case 'MULTIPLY':
        return state * action.payload;
      
    case 'DIVIDE':
      return state * action.payload;
      
    case 'RESET': 
      return state = 0;

    default:
      return state;
  }

};

console.log( reducer(10, incrementAction )); // 11

console.log( reducer(10, decrementAction )); // 9

console.log( reducer(10, multiplyAction )); // 10

console.log( reducer(10, divideAction) ); // 5

console.log( reducer(10, resetAction) ); // 0