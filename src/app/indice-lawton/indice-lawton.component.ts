import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice-lawton',
  templateUrl: './indice-lawton.component.html',
  styleUrls: ['./indice-lawton.component.scss']
})
export class IndiceLawtonComponent implements OnInit {

  indice:string;
  P1Seleccionada: string;
  form: FormGroup;
  respondido: string;
  idEncabezado:string;

  estado:string[]=["Asistido","Independiente"]
  
  constructor(private formBuilder: FormBuilder,private router: Router,) { 
    this.form = this.formBuilder.group({
      pregunta1: ['', [Validators.required]],
    });
    this.indice ="Indice Lawton";
    this.idEncabezado = this.router.getCurrentNavigation()!.extras.state!['idEncabezado'];

  }

  ngOnInit(): void {

  }
  
  btnContinuar(estado:any,idEncabezado: any) {
    // al hacer el clic en el botón se asigna el valor del input a la variable
    this.respondido = this.P1Seleccionada; 
    console.log(idEncabezado, "idEncabezado")  
    this.router.navigate(['/TestLawton'], { state: { respondido: estado, idEncabezado: idEncabezado} })
  }
  
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
      alert("Existen campos sin llenar, debe llenar todos los campos.");
    }
  }


}
