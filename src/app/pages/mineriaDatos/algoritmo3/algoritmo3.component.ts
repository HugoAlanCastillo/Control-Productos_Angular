import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-algoritmo3',
  templateUrl: './algoritmo3.component.html',
  styleUrls: ['./algoritmo3.component.scss']
})
export class Algoritmo3Component implements OnInit {

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
