import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSociosComponent } from './agregar-socios.component';

describe('AgregarSociosComponent', () => {
  let component: AgregarSociosComponent;
  let fixture: ComponentFixture<AgregarSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
