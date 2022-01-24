import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Algoritmo3Component } from './algoritmo3.component';

describe('Algoritmo3Component', () => {
  let component: Algoritmo3Component;
  let fixture: ComponentFixture<Algoritmo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Algoritmo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Algoritmo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
