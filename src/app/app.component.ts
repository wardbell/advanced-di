import { Component, QueryList, AfterViewInit, ViewChildren } from '@angular/core';

import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  show = true;

  animals: Animal[] = [];

  @ViewChildren(Animal) animalsQL: QueryList<Animal>;

  ngAfterViewInit() {
    this.animals = this.animalsQL.toArray();

    this.animalsQL.changes.subscribe(() => {
      this.animals = this.animalsQL.toArray();
      console.log(`View animals list changed. Count=${this.animals.length}`);
    });
  }
}
