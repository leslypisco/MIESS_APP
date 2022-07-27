import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {
  ImagePath: string;
  ImagePath2: string;
  ImagePath3: string;
  indice: string;
  idEncabezado:string ="id3";
  //bloqueado:string="no"                                                            

  constructor(private router: Router) {
    this.indice="Encabezado"
    this.ImagePath = 'https://i.eldiario.com.ec/fotos-manabi-ecuador/2009/mies.png'
    this.ImagePath2 = 'https://cdn-icons-png.flaticon.com/512/825/825590.png'
    this.ImagePath3 ='https://img2.freepng.es/20180402/ysw/kisspng-computer-icons-test-survey-5ac2cf57df8907.6438385715227165039156.jpg'
   }

  ngOnInit(): void {
  }

  dirigirBarthel(idEncabezado: any){
    //this.bloqueado="si"
    //this.habilitado();    
    //console.log(this.bloqueado)
    this.router.navigate(['/IndiceBarthel'],{state: { idEncabezado: idEncabezado} })
  }
/* 
  habilitado(){
    if(this.bloqueado=="si"){
      return true;
    }else{
      return false;
    }
    
  }
  */
}
