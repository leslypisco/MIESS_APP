import { Component, OnInit } from '@angular/core';
import { Adulto } from '../models/adulto';



@Component({
  selector: 'app-adulto-mayor',
  templateUrl: './adulto-mayor.component.html',
  styleUrls: ['./adulto-mayor.component.scss']
})
export class ADULTOMAYORComponent implements OnInit {

  ImagePath: string;
  indice: string;
  constructor() {
    //image location
    this.indice = "Perfíl Usuario"
    this.ImagePath = 'https://i.eldiario.com.ec/fotos-manabi-ecuador/2009/mies.png'
  }

  adulto: Adulto = {
    _id: '',
    am_ci: '',
    am_nombres: '',
    am_apellidos: '',
    am_genero: '',
    am_fecha_nac: '',
    am_etnia: '',
    am_dir: '',
    am_origen: '',
    am_fecha_reg: '',
    am_edad: ''
  };

    ngOnInit(): void {

    }

  }
