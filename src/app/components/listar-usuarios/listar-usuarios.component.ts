import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oldman = {
    odl0 : {
      'id':1,
      'name': 'ABREU HERNANDEZ LUIS FELIPE',
      'edad': 85,
      'test': 'Noviembre',
  },
  odl1 : {
    'id':2,
    'name': 'ABDO FRANCIS JUAN MIGUEL',
    'edad': 83+'- Ultima Visita 29/09/2020',
    'test': 'Febrero',
  },
  odl2 : {
    'id':3,
    'name': 'BARROSO VILLA JUAN GERARDO',
    'edad': 75+'- Ultima Visita 30/06/2020',
    'test': 'Noviembre',
  },
  odl3 : {
    'id':4,
    'name': 'BECKER FAUSER INGEBORG DOROTHEA',
    'edad': 76+'- Ultima Visita 30/08/2020',
    'test': 'Marzo',
  },
  odl4 : {
    'id':5,
    'name': 'CACERES LOPEZ JOSE ALEJANDRO',
    'edad': 90,
    'test': 'Enero',
  },
  odl6 : {
    'id':6,
    'name': 'LOPEZ VIVANCO JOSE ALEJANDRO',
    'edad': 72,
    'test': 'Septiembre',
  }
  }; 
  data = Object.values(this.oldman);

}
