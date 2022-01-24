import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Algoritmo1Component } from './algoritmo1.component';

const routes: Routes = [{ path: '', component: Algoritmo1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Algoritmo1RoutingModule { }
