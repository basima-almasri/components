import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividorComponent } from './dividor.component';

describe('DividorComponent', () => {
  let component: DividorComponent;
  let fixture: ComponentFixture<DividorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividorComponent]
    });
    fixture = TestBed.createComponent(DividorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
