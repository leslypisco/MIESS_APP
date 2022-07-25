import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escala-yesavage',
  templateUrl: './escala-yesavage.component.html',
  styleUrls: ['./escala-yesavage.component.scss']
})
export class EscalaYesavageComponent implements OnInit {

  indice:string;

  constructor() {
    this.indice = "Escala Yesavage"
  }

  ngOnInit(): void {
  }

}
