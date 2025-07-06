import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecibosComponent } from './recibos.component';

describe('RecibosComponent', () => {
  let component: RecibosComponent;
  let fixture: ComponentFixture<RecibosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RecibosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
