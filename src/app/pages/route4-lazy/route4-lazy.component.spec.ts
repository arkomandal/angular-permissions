import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route4LazyComponent } from './route4-lazy.component';

describe('Route4LazyComponent', () => {
  let component: Route4LazyComponent;
  let fixture: ComponentFixture<Route4LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route4LazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
