import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice-barthel',
  templateUrl: './indice-barthel.component.html',
  styleUrls: ['./indice-barthel.component.scss']
})
export class IndiceBarthelComponent implements OnInit {
  indice:string;

  constructor() { 
    this.indice ="Indice Barthel"
  }

  ngOnInit(): void {
  }

}
