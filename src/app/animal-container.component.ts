import { Component, ContentChildren, ElementRef, QueryList, AfterContentInit } from '@angular/core';

import { Animal } from './animal';
import { FoxComponent } from './fox.component';
import { AnimalDirective } from './animal.directive';

@Component({
  selector: 'app-animals',
  template: `
  <div>
  <button mat-raised-button color="accent" type="button" (click)="speak()">What do they say?</button>
  </div>
  <ng-content></ng-content>
  `
})
export class AnimalContainerComponent implements AfterContentInit {

  animals: Animal[] = [];

  @ContentChildren(FoxComponent) foxesQL: QueryList<FoxComponent>;

  @ContentChildren(AnimalDirective) animalDirectivesQL: QueryList<AnimalDirective>;

  @ContentChildren(AnimalDirective, {read: ElementRef}) animalElementsQL: QueryList<ElementRef>;

  @ContentChildren(AnimalDirective, {read: Animal}) animalsQL: QueryList<Animal>;

  ngAfterContentInit() {
    const foxes = this.foxesQL.toArray();
    const animalDirectives = this.animalDirectivesQL.toArray();
    const animalElements = this.animalElementsQL.toArray();
    this.animals = this.animalsQL.toArray();

    this.animalsQL.changes.subscribe(() => {
      this.animals = this.animalsQL.toArray();
    });
  }

  speak() {
    this.animals.forEach(animal => animal.speak());
  }
}
