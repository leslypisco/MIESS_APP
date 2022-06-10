import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  title = 'MIESS_APP';
  //name = 'MIESS_APP';
 
}
