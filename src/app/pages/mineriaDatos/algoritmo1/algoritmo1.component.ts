import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-algoritmo1',
  templateUrl: './algoritmo1.component.html',
  styleUrls: ['./algoritmo1.component.scss']
})
export class Algoritmo1Component implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar(): void {
    this.router.navigate(['menuMineria']);
  }

}
