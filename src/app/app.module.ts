import { NavbarComponent } from './shared/navbar/navbar.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { LibrosFormComponent } from './shared/components/libros-form/libros-form.component';
import { LibrosFormModule } from './shared/components/libros-form/libros-form.module';
/* import { LibrosFormComponent1 } from './shared/components/libros-form1/libros-form1.component';
import { LibrosFormModule1 } from './shared/components/libros-form1/libros-form1.module'; */

import { LibrosForm1Component } from './shared/components/libros-form1/libros-form1.component';

//mineria de datos
/* import { Algoritmo1Component } from './pages/mineriaDatos/algoritmo1/algoritmo1.component';
import { Algoritmo2Component } from './pages/mineriaDatos/algoritmo2/algoritmo2.component';
import { Algoritmo3Component } from './pages/mineriaDatos/algoritmo3/algoritmo3.component';
import { MenuMineriaComponent } from './pages/mineriaDatos/menu-mineria/menu-mineria.component';
import { GraficosComponent } from './pages/mineriaDatos/graficos/graficos.component'; */




@NgModule({
  declarations: [
    NavbarComponent,
    Navbar2Component,
    AppComponent,
    LibrosForm1Component,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    LibrosFormModule,
   /*  LibrosFormModule1, */
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }