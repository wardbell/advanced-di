import { Component } from '@angular/core';

export abstract class Animal {
  name: string;
  abstract speak(): void;
  abstract clear(): void;
}
