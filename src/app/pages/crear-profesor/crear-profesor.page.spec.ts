import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearProfesorPage } from './crear-profesor.page';

describe('CrearProfesorPage', () => {
  let component: CrearProfesorPage;
  let fixture: ComponentFixture<CrearProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
