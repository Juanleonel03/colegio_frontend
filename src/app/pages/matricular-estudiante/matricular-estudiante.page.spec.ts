import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatricularEstudiantePage } from './matricular-estudiante.page';

describe('MatricularEstudiantePage', () => {
  let component: MatricularEstudiantePage;
  let fixture: ComponentFixture<MatricularEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricularEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
