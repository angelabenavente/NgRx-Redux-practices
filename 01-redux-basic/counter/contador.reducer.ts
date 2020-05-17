import { Action } from '../ngrx-fake/ngrx';

export function reducer( state = 10, action: Action ) {
  
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