import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOrderFormComponent } from './store-order-form.component';

describe('StoreOrderFormComponent', () => {
  let component: StoreOrderFormComponent;
  let fixture: ComponentFixture<StoreOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
