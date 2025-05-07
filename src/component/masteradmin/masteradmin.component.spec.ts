import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteradminComponent } from './masteradmin.component';

describe('MasteradminComponent', () => {
  let component: MasteradminComponent;
  let fixture: ComponentFixture<MasteradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasteradminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasteradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
