import { Reducer, Action } from './ngrx-fake/ngrx';
import { reducer } from './counter/contador.reducer';
import { incrementAction } from './counter/counter.actions';

class Store<T> { // <T> generic type

  private state: T; 

  constructor( private reducer: Reducer<T>,
               private state: T ) {

  }

  getState() { // get the actual state
    return this.state;
  };

  dispatch( action: Action ) { // execute the action
    this.state = this.reducer( this.state, action );
  }

};

const store = new Store( reducer, 10 );

console.log( store.getState()); // to see state App (10)

store.dispatch( incrementAction ); 

console.log( store.getState()); // to see state App (11)
