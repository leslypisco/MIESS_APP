import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-listar-tecnicos',
  templateUrl: './listar-tecnicos.component.html',
  styleUrls: ['./listar-tecnicos.component.scss']
})

//implements OnInit
export class ListarTecnicosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    //this.dialog.open();
    this.dialog.open(DialogoCerrrar);
  }
  
  ngOnInit(): void {
  }
  searchText='';

  personas = [
    {
        "nombre": "Maron Omar Ferrin Moreira",
        "cedula": 2300720576,
        "correo": "moferrin@espe.edu.ec",
        "direccion": "Santo Domingo"
    },
    {
        "nombre": "Andres Castro",
        "cedula": 3287263,
        "correo": "bacastro1@espe.edu.ec",
        "direccion": "vff ."
    },
    {
        "nombre": "Selena Enriquez",
        "cedula": 357114,
        "correo": "sienriquez@espe.edu.ec",
        "direccion": "vxcv,mxcvmxc,"
    },
    {
      "nombre": "Bryan Ponce",
      "cedula": 640679,
      "correo": 64979548,
      "direccion": "sdfsdfs."
  },
  {
      "nombre": "DSFSD",
      "cedula": 3287263,
      "correo": 1324171354,
      "direccion": "dsfsdff."
  },
  {
      "nombre": "SDFSDFSDF",
      "cedula": 357114,
      "correo": 82114224,
      "direccion": "SDFSDD"
  },
  {
    "nombre": "GGHFG",
    "cedula": 640679,
    "correo": 64979548,
    "direccion": "fglñkgl."
  },
  {
    "nombre": "ldkdlfkgl",
    "cedula": 3287263,
    "correo": 1324171354,
    "direccion": ",mljklkjlkjgf."
  },
  {
      "nombre": "fgfgfh",
      "cedula": 357114,
      "correo": 82114224,
      "direccion": "gfhfg."
  },
  {
    "nombre": "fghfgh",
    "cedula": 640679,
    "correo": 64979548,
    "direccion": "ghfghg."
  },
  {
    "nombre": "fghfg",
    "cedula": 3287263,
    "correo": 1324171354,
    "direccion": "gfhfg."
  },
  {
    "nombre": "fghg",
    "cedula": 357114,
    "correo": 82114224,
    "direccion": "fghfghfg."
  }
]
    
  data = Object.values(this.personas);


}


//componente dialogo
@Component({
  selector: 'dialogo-cerrar',
  templateUrl: 'dialogo-cerrar.html',
})
export class DialogoCerrrar {}



