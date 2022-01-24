import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Algoritmo3Component } from "./algoritmo3.component";

const routes: Routes = [{ path: '', component: Algoritmo3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Algoritmo3RoutingModule { }
