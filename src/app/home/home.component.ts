import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ListComponent } from './../pages/libros/list/list.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresarLista(): void {
    this.router.navigate(['new']);
  }

  ingresarGrafico(): void {
    this.router.navigate(['graficos']);
  }

  ingresarMineriaDatos(): void {
    this.router.navigate(['menuMineria']);
    
  }
}
