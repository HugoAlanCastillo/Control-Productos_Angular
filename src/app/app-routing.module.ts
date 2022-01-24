import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full',},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
//login
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },

//inventario productos
  { path: 'list', loadChildren: () => import('./pages/libros/list/list.module').then(m => m.ListModule) },
  { path: 'new', loadChildren: () => import('./pages/libros/new/new.module').then(m => m.NewModule) },
  { path: 'details', loadChildren: () => import('./pages/libros/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./pages/libros/edit/edit.module').then(m => m.EditModule) },
 
//mineria de datos
  { path: 'algoritmo1', loadChildren: () => import('./pages/mineriaDatos/algoritmo1/algoritmo1.module').then(m => m.Algoritmo1Module) },
  { path: 'algoritmo2', loadChildren: () => import('./pages/mineriaDatos/algoritmo2/algoritmo2.module').then(m => m.Algoritmo2Module) },
  { path: 'algoritmo3', loadChildren: () => import('./pages/mineriaDatos/algoritmo3/algoritmo3.module').then(m => m.Algoritmo3Module) },
  { path: 'graficos', loadChildren: () => import('./pages/mineriaDatos/graficos/graficos.module').then(m => m.GraficosModule) },
  { path: 'menuMineria', loadChildren: () => import('./pages/mineriaDatos/menu-mineria/menu-mineria.module').then(m => m.MenuMineriaModule) },
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
