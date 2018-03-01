import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dog',
  template: `
  <div class="card">
    <img src="../assets/dog.jpg"/>
    <h3>{{saying}}</h3>
  </div>
  `,
  providers: [
    { provide: Animal, useExisting: DogComponent }
  ]
})
export class DogComponent implements Animal {

  saying: string;

  speak() {
    this.saying = 'Woof';
  }
}
