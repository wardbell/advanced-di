import { Component, Injector, AfterViewInit } from '@angular/core';
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
export class CatComponent implements Animal, AfterViewInit {

  constructor(private injector: Injector) {}

  name = 'Cat';
  saying: string;

  // Debug here and find the Animal token among the
  // CatComponent provider tokens: injector.elDef.element.allProviders
  ngAfterViewInit() {
    const a = this.injector.get(Animal);
    const c = this.injector.get(CatComponent);
  }

  speak() {
    this.saying = 'Meow';
  }

  clear() {
    this.saying = '';
  }
}
