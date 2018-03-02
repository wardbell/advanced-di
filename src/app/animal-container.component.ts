import { Component, ContentChildren, ElementRef, QueryList, AfterContentInit } from '@angular/core';

import { Animal } from './animal';
import { AnimalDirective } from './animal.directive';
import { AppComponent } from './app.component';
import { FoxComponent } from './fox.component';

@Component({
  selector: 'app-animals',
  templateUrl: './animal-container.component.html',
  styles: ['button { margin: 20px 0}']

})
export class AnimalContainerComponent implements AfterContentInit {

  animals: any[] = [];
  shouldSpeak = true;


  /*** ContentChildren variations ***/

  // Known component
  @ContentChildren(FoxComponent) foxesQL: QueryList<FoxComponent>;

  // #item reference
  @ContentChildren('item') itemRefsQL: QueryList<any>;

  // `animal` attribute directive
  @ContentChildren(AnimalDirective) animalDirectivesQL: QueryList<AnimalDirective>;

  // ElementRef of the `animal` attribute directive
  @ContentChildren(AnimalDirective, {read: ElementRef}) directiveElementsQL: QueryList<ElementRef>;

  // Animal "interface" of the attribute directive's attached component
  @ContentChildren(AnimalDirective, {read: Animal}) directiveAnimalsQL: QueryList<Animal>;

  // Any projected component with an Animal "interface" in its injector
  @ContentChildren(Animal) animalsQL: QueryList<Animal>;

  ngAfterContentInit() {
    const foxes             = this.foxesQL.toArray();
    const itemRefs          = this.itemRefsQL.toArray();
    const animalDirectives  = this.animalDirectivesQL.toArray();
    const directiveElements = this.directiveElementsQL.toArray();
    const directiveAnimals  = this.directiveAnimalsQL.toArray();
    const animals           = this.animalsQL.toArray();

    this.animals = animals;  // try each array ^^^

    // ElementRef grants access to the `native` DOM element.
    directiveElements.forEach(elRef => {
      const el: HTMLElement = elRef.nativeElement;

      // Torture the DOM element directly.
      el.style.backgroundColor = 'black';
      el.style.color = 'white';
      el.style.margin = '0.2em';
    });

    // Subscribe to changes in the QueryList
    this.animalsQL.changes.subscribe(() => {
      this.animals = this.animalsQL.toArray();
      console.log(`Projected animals list changed. Count=${this.animals.length}`);
    });
  }


  /** Ask the animals to speak */
  speak() {
    this.animals.forEach(animal => {
      try {
        this.shouldSpeak ? animal.speak() : animal.clear();
      } catch (error) {
        console.error(animal.name + ' is not an Animal');
      }
    });

    // Toggle whether should speak or be quiet
    this.shouldSpeak = !this.shouldSpeak;
  }


  //////////////////////

  // Can reach up the injector tree for component if you know its type.
  constructor(public parent: AppComponent) {}

  // Toggle the parent's `show` flag
  hideShow() {
    this.parent.show = !this.parent.show;
    this.shouldSpeak = true; // always restore speech
  }
}
