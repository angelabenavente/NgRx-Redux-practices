import { Component, OnInit } from '@angular/core';
import { reset } from '../counter.actions';
import { Store } from 'redux';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: [
  ]
})
export class GrandchildComponent implements OnInit {

  counter: number;

  constructor() { }

  ngOnInit( private store: Store ): void {
    this.store.select('counter')
      .subscribe(counter => this.counter = counter);
  }

  reset() {
    this.store.dispatch( reset );
  }

}
