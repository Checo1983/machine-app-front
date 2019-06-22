import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbuyComponent } from './newbuy.component';

describe('NewbuyComponent', () => {
  let component: NewbuyComponent;
  let fixture: ComponentFixture<NewbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
