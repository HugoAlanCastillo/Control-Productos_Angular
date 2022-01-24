import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMineriaComponent } from './menu-mineria.component';

describe('MenuMineriaComponent', () => {
  let component: MenuMineriaComponent;
  let fixture: ComponentFixture<MenuMineriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMineriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMineriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
