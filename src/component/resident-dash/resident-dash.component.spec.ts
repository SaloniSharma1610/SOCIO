import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDashComponent } from './resident-dash.component';

describe('ResidentDashComponent', () => {
  let component: ResidentDashComponent;
  let fixture: ComponentFixture<ResidentDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
