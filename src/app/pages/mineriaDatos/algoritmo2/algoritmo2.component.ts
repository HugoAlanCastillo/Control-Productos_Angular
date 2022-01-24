import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-algoritmo2',
  templateUrl: './algoritmo2.component.html',
  styleUrls: ['./algoritmo2.component.scss']
})
export class Algoritmo2Component implements OnInit {
  
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
