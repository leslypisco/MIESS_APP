import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escala-yesavage',
  templateUrl: './escala-yesavage.component.html',
  styleUrls: ['./escala-yesavage.component.scss']
})
export class EscalaYesavageComponent implements OnInit {

  indice:string;
  idEncabezado:any;


  constructor(private router: Router) {
    this.indice = "Escala Yesavage"
    this.idEncabezado = this.router.getCurrentNavigation()!.extras.state!['idEncabezado'];
  }

  ngOnInit(): void {
    console.log("El id en test es:" + this.idEncabezado)
  }

  enviar(){
    this.router.navigate(['test-escala-yesavage'], {state: {idEncabezado: this.idEncabezado}});
  }
}
