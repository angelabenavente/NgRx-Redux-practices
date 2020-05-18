import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  counter: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter')
      .subscribe( counter => this.counter = counter );
  }

  multiply() {
    // this.counter *= 2;
    // this.changeCounter.emit(this.counter);
  }

  divide() {
    // this.counter /= 2;
    // this.changeCounter.emit(this.counter);
  }

}
