import { Store } from 'redux'; //Store already exist in redux library
import { incrementAction } from './counter/counter.actions';
import { reducer } from './counter/contador.reducer';

const store: Store = createStore( reducer );
//createStore in redux return the state without getting it mannually

store.subscribe ( [] => {

  console.log(store.getState); // it notifies when the state changes

})

store.dispatch ( incrementAction );