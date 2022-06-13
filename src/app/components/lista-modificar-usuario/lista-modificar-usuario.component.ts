import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-modificar-usuario',
  templateUrl: './lista-modificar-usuario.component.html',
  styleUrls: ['./lista-modificar-usuario.component.scss']
})
export class ListaModificarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  oldman = {
    odl0 : {
      'id': 1,
      'name': 'ABREU HERNANDEZ LUIS FELIPE',
      'edad': 85+'- Ultima Visita ',
  },
  odl1 : {
    'id': 2,
    'name': 'ABDO FRANCIS JUAN MIGUEL',
    'edad': 83+'- Ultima Visita ',
  },
  odl2 : {
    'id': 3,
    'name': 'BARROSO VILLA JUAN GERARDO',
    'edad': 75+'- Ultima Visita 30/06/2020',
  },
  odl3 : {
    'id': 4,
    'name': 'BECKER FAUSER INGEBORG DOROTHEA',
    'edad': 76+'- Ultima Visita 30/08/2020',

  },
  odl4 : {
    'id': 5,
    'name': 'CACERES LOPEZ JOSE ALEJANDRO',
    'edad': 90+'- Ultima Visita ',
  },
  odl6 : {
    'id': 6,
    'name': 'LOPEZ VIVANCO JOSE ALEJANDRO',
    'edad': 72+'- Ultima Visita ',
  }
  }; 
  data = Object.values(this.oldman);

}
