import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  container: number;

  constructor() {
    this.container = 10;
  }

  increment(){
    this.container ++;
  }
  
  decrement(){
    this.container --;
  }
  
}