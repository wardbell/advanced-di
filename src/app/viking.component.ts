import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'viking',
  template: `
  <div class="card">
    <img src="../assets/johnpapa.png"/>
    <h3>{{saying}}</h3>
  </div>
  `,
  providers: [
    { provide: Animal, useExisting: VikingComponent }
  ]
})
export class VikingComponent {

  saying: string;

  speak() {
    this.saying = 'Aiiii!!!';
  }
}
