import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSupervisorComponent } from './info-supervisor.component';

describe('InfoSupervisorComponent', () => {
  let component: InfoSupervisorComponent;
  let fixture: ComponentFixture<InfoSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
