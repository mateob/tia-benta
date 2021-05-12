import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderListComponent } from './store-order-list.component';

describe('StoreOrderListComponent', () => {
  let component: StoreOrderListComponent;
  let fixture: ComponentFixture<StoreOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
