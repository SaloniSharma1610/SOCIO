import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollsocietyComponent } from './enrollsociety.component';

describe('EnrollsocietyComponent', () => {
  let component: EnrollsocietyComponent;
  let fixture: ComponentFixture<EnrollsocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollsocietyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollsocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
