import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-escala-yesavage',
  templateUrl: './test-escala-yesavage.component.html',
  styleUrls: ['./test-escala-yesavage.component.scss']
})
export class TestEscalaYesavageComponent implements OnInit {

  public hora: number=0;
  public minutos: number=0;
  public segundos: number=0;

  public coleccion:Array<any> = [];
  public contador: any;

  form: FormGroup;

  constructor( private formBuilder:FormBuilder ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  start(){
    if (this.contador == undefined) {
      this.contador = setInterval( () =>{
        this.segundos +=1;
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos +=1;
          if (this.minutos == 60) {
            this.minutos =0;
            this.hora +=1;
            if (this.hora = 24) {
              this.hora = 0;
            }
          }
        }
      }, 1000);
    }
    
  }

  stop(){
    clearInterval(this.contador);
    this.hora = this.hora;
    this.minutos=this.minutos;
    this.segundos=this.segundos;
    this.contador=null;
  }

  buildForm() {
    this.form = this.formBuilder.group({
      pregunta1: new FormControl('', [Validators.required]),
      pregunta2: new FormControl('', [Validators.required]),
      pregunta3: new FormControl('', [Validators.required]),
      pregunta4: new FormControl('', [Validators.required]),
      pregunta5: new FormControl('', [Validators.required]),
      pregunta6: new FormControl('', [Validators.required]),
      pregunta7: new FormControl('', [Validators.required]),
      pregunta8: new FormControl('', [Validators.required]),
      pregunta9: new FormControl('', [Validators.required]),
      pregunta10: new FormControl('', [Validators.required]),
      pregunta11: new FormControl('', [Validators.required]),
      pregunta12: new FormControl('', [Validators.required]),
      pregunta13: new FormControl('', [Validators.required]),
      pregunta14: new FormControl('', [Validators.required]),
      pregunta15: new FormControl('', [Validators.required]),
    });
  }

  save(event: Event) {
    event.preventDefault();

    if(this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
      alert("Existen campos sin llenar, debe llenar todos los campos.");
    }
  }

}
interface crono{
  hora:number;
  minutos: number;
  segundos: number;
}