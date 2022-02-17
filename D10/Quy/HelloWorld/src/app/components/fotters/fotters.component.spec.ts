import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FottersComponent } from './fotters.component';

describe('FottersComponent', () => {
  let component: FottersComponent;
  let fixture: ComponentFixture<FottersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FottersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FottersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
