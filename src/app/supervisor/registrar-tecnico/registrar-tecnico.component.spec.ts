import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTecnicoComponent } from './registrar-tecnico.component';

describe('RegistrarTecnicoComponent', () => {
  let component: RegistrarTecnicoComponent;
  let fixture: ComponentFixture<RegistrarTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
