import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMiniMentalComponent } from './ex-mini-mental.component';

describe('ExMiniMentalComponent', () => {
  let component: ExMiniMentalComponent;
  let fixture: ComponentFixture<ExMiniMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExMiniMentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExMiniMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
