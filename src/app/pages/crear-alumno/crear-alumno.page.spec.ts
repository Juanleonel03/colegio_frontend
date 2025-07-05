import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearAlumnoPage } from './crear-alumno.page';

describe('CrearAlumnoPage', () => {
  let component: CrearAlumnoPage;
  let fixture: ComponentFixture<CrearAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
