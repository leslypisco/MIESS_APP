import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tecnicos',
  templateUrl: './listar-tecnicos.component.html',
  styleUrls: ['./listar-tecnicos.component.scss']
})
export class ListarTecnicosComponent implements OnInit {

  constructor() {

    
   }

  ngOnInit(): void {
    
  }
  
  people = {
    person : {
      'name': 'CRAVIOTO QUINTANA ALEJANDRO RAFAEL',
      'phone': 1234567890,
  },
  person1 : {
    'name': 'ESCOBAR BRIONES CARALINA LUCÍA',
    'phone': 6857493849,
  },
  person2 : {
    'name': 'BARROSO VILLA JUAN',
    'phone': 5837584939,
  },
  person3 : {
    'name': 'ESTRADA GARCÍA MARÍA TERESA',
    'phone': 6758495839,
  },
  person4 : {
    'name': 'BECKER FAUSER INGEBORG DOROTHEA MARÍA',
    'phone': 5847394839,
  },
  person5 : {
    'name': 'FURUYA MEGURO MARÍA',
    'phone': 5739483939,
  }
  }; 
  //pasamos un objeto y nos devuelve un array
  data = Object.values(this.people);


}
