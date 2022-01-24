import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosForm1Component } from './libros-form1.component';

describe('LibrosForm1Component', () => {
  let component: LibrosForm1Component;
  let fixture: ComponentFixture<LibrosForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
