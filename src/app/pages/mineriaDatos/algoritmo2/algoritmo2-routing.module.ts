import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Algoritmo2Component } from "./algoritmo2.component";

const routes: Routes = [{ path: '', component: Algoritmo2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Algoritmo2RoutingModule { }
