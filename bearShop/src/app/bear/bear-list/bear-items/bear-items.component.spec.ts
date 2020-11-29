import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearItemsComponent } from './bear-items.component';

describe('BearItemsComponent', () => {
  let component: BearItemsComponent;
  let fixture: ComponentFixture<BearItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
