import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AdultosService } from 'src/app/services/adultos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'

interface Genero {
  value: string;
  viewValue: string;
}

const now = new Date();

@Component({
  selector: 'app-modificar-tecnico',
  templateUrl: './modificar-adulto.component.html',
  styleUrls: ['./modificar-adulto.component.scss']
})
export class ModificarAdultoComponent implements OnInit {

  hayError: boolean = false;

  form!:FormGroup;
  nombres="";
  apellidos="";

  genero: Genero[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'},
  ];

  constructor(
    private router: Router, 
    private adultosService: AdultosService, 
    public formulario: FormBuilder,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) { 

    const id = this.route.snapshot.paramMap.get('id');
    this.adultosService.getById(id).subscribe(res => {
      res
      var gen = "";
      if (res['am_genero']=="Masculino") {
        gen = "Masculino";
      }else{
        gen = "Femenino";
      }
      this.nombres = res['am_nombres'];
      this.apellidos = res['am_apellidos'];

      let date = this.datepipe.transform(res['am_fecha_nac'], 'yyyy-MM-dd');

      this.form.setValue({
        cedula: res['am_ci'],
        genero: gen,
        date: date,
        etnia: res['am_etnia'],
        direccion: res['am_dir'],
        origen: res['am_origen']
      });
    });

    this.form = this.formulario.group({
        cedula: [''],
        genero: [''],
        date: [''],
        etnia: [''],
        direccion: [''],
        origen: ['']
    });
    
  }

  ngOnInit(): void {
    
  }


  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
        var resp;
        this.adultosService.agregarAdulto(this.form.value).subscribe(res => {
          resp = res['status'];
          if (resp == "adulto_c") {
            alert("Datos ingresados correctamente.");
            this.router.navigate(['users']);
          }else {
            alert("Ocurrio un error al insertar en la base de datos.");
          }
        });
    }else{
      this.hayError=true;
    }
  }
    
  }


