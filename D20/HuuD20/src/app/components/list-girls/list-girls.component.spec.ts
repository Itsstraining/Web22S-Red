import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGirlsComponent } from './list-girls.component';

describe('ListGirlsComponent', () => {
  let component: ListGirlsComponent;
  let fixture: ComponentFixture<ListGirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
