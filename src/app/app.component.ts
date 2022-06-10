import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MIESS_APP';
  name = 'MIESS_APP';
  products = [{
    'id': 1,
    'nombre': 'CRAVIOTO QUINTANA ALEJANDRO RAFAEL',
    'telefono': 1234567890
  }, {
    'id': 2,
    'nombre': 'ESCOBAR BRIONES CARALINA LUCÍA',
    'telefono': 6857493849
  }, {
    'id': 3,
    'nombre': 'BARROSO VILLA JUAN',
    'telefono': 5837584939
  }, {
    'id': 4,
    'nombre': 'ESTRADA GARCÍA MARÍA TERESA',
    'telefono': 6758495839
  }, {
    'id': 5,
    'nombre': 'BECKER FAUSER INGEBORG DOROTHEA MARÍA',
    'telefono': 5847394839
  }, {
    'id': 6,
    'nombre': 'FURUYA MEGURO MARÍA',
    'telefono': 5739483939
  }]; 
}
