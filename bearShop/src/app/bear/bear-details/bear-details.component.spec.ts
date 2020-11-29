import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearDetailsComponent } from './bear-details.component';

describe('BearDetailsComponent', () => {
  let component: BearDetailsComponent;
  let fixture: ComponentFixture<BearDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
