import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-adulto-mayor',
  templateUrl: './adulto-mayor.component.html',
  styleUrls: ['./adulto-mayor.component.scss']
})
export class ADULTOMAYORComponent implements OnInit {

  ImagePath: string;
  constructor() { 
    //image location
    this.ImagePath = 'https://i.eldiario.com.ec/fotos-manabi-ecuador/2009/mies.png'
  }

  ngOnInit(): void {

  }

}
