import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCOneComponent } from './other-c-one.component';

describe('OtherCOneComponent', () => {
  let component: OtherCOneComponent;
  let fixture: ComponentFixture<OtherCOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
