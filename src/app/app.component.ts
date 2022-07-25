import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto-Yesa';

  // Barra de menu
  indice:string;

  // Formularios
  ImagePath2: string;
  ImagePath3: string;

  constructor() {
    this.indice = "FORMULARIOS"
    this.ImagePath2 = 'https://cdn-icons-png.flaticon.com/512/825/825590.png'
    this.ImagePath3 ='https://img2.freepng.es/20180402/ysw/kisspng-computer-icons-test-survey-5ac2cf57df8907.6438385715227165039156.jpg'
  }

}
