import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Algoritmo1RoutingModule } from './algoritmo1-routing.module';
import { Algoritmo1Component } from './algoritmo1.component';

@NgModule({
  declarations: [Algoritmo1Component],
  imports: [
    CommonModule,
    Algoritmo1RoutingModule
  ]
})
export class Algoritmo1Module { }
