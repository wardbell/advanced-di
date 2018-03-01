import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'viking',
  template: `
  <div>
    <img src="../assets/johnpapa.png"/>
    <h3>{{saying}}</h3>
  </div>
  `,
  providers: [
    { provide: Animal, useExisting: VikingComponent }
  ]
})
// Doesn't officially implement Animal interface
export class VikingComponent {

  name = 'Viking';
  saying: string;

  speak() {
    this.saying = 'Aiiii!!!';
  }

  clear() {
    this.saying = '';
  }
}
