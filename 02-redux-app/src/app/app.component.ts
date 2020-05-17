import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
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
    this.store.select('counter'
    ).subscribe( counter => this.counter = counter);
  }

  increment(){
    this.store.dispache( actions.increment() );
  }
  
  decrement(){
    this.store.dispache( actions.decrement() );

  }
  
}