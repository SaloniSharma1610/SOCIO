import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutenavComponent } from './routenav.component';

describe('RoutenavComponent', () => {
  let component: RoutenavComponent;
  let fixture: ComponentFixture<RoutenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
