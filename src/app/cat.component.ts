import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cat',
  template: `
  <div class="card">
    <img src="../assets/cat.jpeg"/>
    <h3>{{saying}}</h3>
  </div>
  `,
  providers: [
    { provide: Animal, useExisting: CatComponent }
  ]
})
export class CatComponent implements Animal {

  saying: string;

  speak() {
    this.saying = 'Meow';
  }
}
