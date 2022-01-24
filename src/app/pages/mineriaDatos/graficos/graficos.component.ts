import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {
Ñ
 
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  regresar(): void {
    this._location.back();
  }
}
