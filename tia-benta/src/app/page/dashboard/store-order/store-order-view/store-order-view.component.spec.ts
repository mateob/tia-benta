import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderViewComponent } from './store-order-view.component';

describe('StoreOrderViewComponent', () => {
  let component: StoreOrderViewComponent;
  let fixture: ComponentFixture<StoreOrderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreOrderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
