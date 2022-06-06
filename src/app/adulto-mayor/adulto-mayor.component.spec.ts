import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADULTOMAYORComponent } from './adulto-mayor.component';

describe('ADULTOMAYORComponent', () => {
  let component: ADULTOMAYORComponent;
  let fixture: ComponentFixture<ADULTOMAYORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADULTOMAYORComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADULTOMAYORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
