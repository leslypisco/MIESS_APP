import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tecnicos',
  templateUrl: './listar-tecnicos.component.html',
  styleUrls: ['./listar-tecnicos.component.scss']
})
export class ListarTecnicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  usuarios = {
    persona1 : {
      'id': 1,
      'nombre': 'CRAVIOTO QUINTANA ALEJANDRO RAFAEL',
      'telefono': 1234567890,
  },
  persona2 : {
    'id': 2,
    'nombre': 'ESCOBAR BRIONES CARALINA LUCÍA',
    'telefono': 6857493849,
  },
  persona3 : {
    'id': 3,
    'nombre': 'BARROSO VILLA JUAN',
    'telefono': 5837584939,
  },
  persona4 : {
    'id': 4,
    'nombre': 'ESTRADA GARCÍA MARÍA TERESA',
    'telefono': 6758495839,
  },
  persona5 : {
    'id': 5,
    'nombre': 'BECKER FAUSER INGEBORG DOROTHEA MARÍA',
    'telefono': 5847394839,
  },
  persona6 : {
    'id': 6,
    'nombre': 'FURUYA MEGURO MARÍA',
    'telefono': 5739483939,
  }
  }; 
}
