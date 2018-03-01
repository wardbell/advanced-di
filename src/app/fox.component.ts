import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fox',
  template: `
  <div class="card">
    <img src="../assets/fox.jpeg"/>
    <h3>{{saying}}</h3>
  </div>
  `,
  providers: [
    { provide: Animal, useExisting: FoxComponent }
  ]
})
export class FoxComponent implements Animal {

  saying: string;

  speak() {
    this.saying = 'ring-ding-ding-ding-dingedinging';
  }
}
