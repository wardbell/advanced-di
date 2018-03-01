import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalDirective } from './animal.directive';
import { AnimalContainerComponent } from './animal-container.component';
import { CatComponent } from './Cat.component';
import { DogComponent } from './Dog.component';
import { FoxComponent } from './fox.component';
import { RockComponent } from './rock.component';
import { VikingComponent } from './Viking.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalDirective,
    AnimalContainerComponent,
    CatComponent,
    DogComponent,
    FoxComponent,
    RockComponent,
    VikingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
