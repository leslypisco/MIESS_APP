import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTecnicosComponent } from './informacion-tecnicos.component';

describe('InformacionTecnicosComponent', () => {
  let component: InformacionTecnicosComponent;
  let fixture: ComponentFixture<InformacionTecnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionTecnicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
