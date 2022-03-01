import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemCartComponent } from './list-item-cart.component';

describe('ListItemCartComponent', () => {
  let component: ListItemCartComponent;
  let fixture: ComponentFixture<ListItemCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
