import { Component, OnInit } from '@angular/core';
import { AdultosService } from 'src/app/services/adultos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  data: any;
  adultosCount: any;
  searchText='';

  constructor(private adultosService: AdultosService) { 
  }

  ngOnInit(): void {
    this.adultosService.getAdultosCount().subscribe(result => {
      this.adultosCount = result;
    });
    this.adultosService.getAdultos().subscribe(result => {
      this.data = result;
      for (let index = 0; index < this.adultosCount; index++) {
        if (this.data[index]['am_genero']==1) {
          this.data[index]['am_genero'] = "Masculino"
        } else {
          this.data[index]['am_genero'] = "Femenino"
        }
      }
      console.log(this.data)
    });
    
  }
}
