import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observacion',
  templateUrl: './observacion.component.html',
  styleUrls: ['./observacion.component.scss']
})
export class ObservacionComponent implements OnInit {
  ImagePath: string;
  constructor() {
    //image location
    this.ImagePath = '/assets/images/sample.jpg'
   }

  ngOnInit(): void {
  }

}
