import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dog',
  template: `
  <div>
    <img src="../assets/dog.jpg"/>
    <h3>{{saying}}</h3>
  </div>
  `,
  providers: [
    { provide: Animal, useExisting: DogComponent }
  ]
})
// Subclasses Animal
export class DogComponent extends Animal {

  name = 'Dog';
  saying: string;

  speak() {
    this.saying = 'Woof';
  }

  clear() {
    this.saying = '';
  }

}
