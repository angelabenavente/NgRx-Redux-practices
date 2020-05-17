import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/counter.actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor( private store: Store<AppState>) {
    this.store.sub+( state => {
      console.log(state);
      this.counter = state.counter;
    })
  }

  increment(){
    this.store.dispache( actions.increment() );
  }
  
  decrement(){
    this.store.dispache( actions.decrement() );

  }
  
}