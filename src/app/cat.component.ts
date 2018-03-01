import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cat',
  template: `
  <div>
    <img src="../assets/cat.jpeg"/>
    <h3>{{saying}}</h3>
  </div>
  `,
  providers: [
    { provide: Animal, useExisting: CatComponent }
  ]
})
export class CatComponent implements Animal {

  name = 'Cat';
  saying: string;

  speak() {
    this.saying = 'Meow';
  }

  clear() {
    this.saying = '';
  }
}
