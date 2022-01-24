import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuMineriaComponent } from "./menu-mineria.component";

const routes: Routes = [{ path: '', component: MenuMineriaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuMineriaRoutingModule { }
