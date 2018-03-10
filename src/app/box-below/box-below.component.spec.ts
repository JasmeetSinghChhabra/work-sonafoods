import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBelowComponent } from './box-below.component';

describe('BoxBelowComponent', () => {
  let component: BoxBelowComponent;
  let fixture: ComponentFixture<BoxBelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
