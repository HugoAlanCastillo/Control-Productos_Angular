import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu-mineria',
  templateUrl: './menu-mineria.component.html',
  styleUrls: ['./menu-mineria.component.scss']
})
export class MenuMineriaComponent {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresarAlgoritmo1(): void {
    this.router.navigate(['algoritmo1']);
  }

  ingresarAlgoritmo2(): void {
    this.router.navigate(['algoritmo2']);
  }

  ingresarGraficos(): void {
    this.router.navigate(['graficos']);
  }

  ingresarAlgoritmo3(): void {
    this.router.navigate(['algoritmo3']);
  }
}
