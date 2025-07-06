import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReclamoComponent } from './reclamo.component';

describe('ReclamoComponent', () => {
  let component: ReclamoComponent;
  let fixture: ComponentFixture<ReclamoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReclamoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
