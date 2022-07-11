import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-test-barthel',
  templateUrl: './test-barthel.component.html',
  styleUrls: ['./test-barthel.component.scss'],
})
export class TestBarthelComponent implements OnInit {
  form: FormGroup;
  indice:string;

  public hora: number=0;
  public minutos: number=0;
  public segundos: number=0;

  public seg: string= "00";
  public min: string= "00";
  public hr: string= "00";

  public contador: any;

  P1Seleccionada: string|undefined;
  P1: string[] = ['Incapaz', 'Necesita ayuda para cortar, extender mantequilla, usar  condimentos, etc',
   'Independiente. (puede comer solo)'];
  P2Seleccionada: string|undefined;
  P2: string[] = ['Incapaz, no se mantiene sentado.',
   'Necesita ayuda importante (una persona entrenada o 2 personas , puede estar sentado.)',
    'Necesita algo de ayuda (una pequeña ayuda física o ayuda verbal',
  'Independiente'];
  P3Seleccionada: string|undefined;
  P3: string[] = ['Necesita ayuda con el aseo personal', 
  'Independiente para lavarse la cara, las manos y los dientes, peinarse y afeitarse'];
  P4Seleccionada: string|undefined;
  P4: string[] = ['Dependiente', 'Necesita alguna ayuda, pero puede hacer algo solo',
'Independiente (entrar y salir, limpiarse y vestirse)'];
  P5Seleccionada: string|undefined;
  P5: string[] = ['Dependiente', 'Independiente para bañarse o ducharse.'];
  P6Seleccionada: string|undefined;
  P6: string[] = ['Inmóvil', 'Independiente en silla de ruedas en 50 metros'
,'Anda con pequeña ayuda de una persona (física o verbal)'
,'Independiente al menos 50m con cualquier tipo de muleta excepto andador.'];
  P7Seleccionada: string|undefined;
  P7: string[] = ['Incapaz', 'Necesita ayuda física o verbal puede llevar cualquier tipo de   muleta.'
,'Independiente para subir y bajar.'];
  P8Seleccionada: string|undefined;
  P8: string[] = ['Dependiente', 'Necesita ayuda, pero puede hacer la mitad aproximadamente sin  ayuda.'
,'Independiente incluyendo botones, cremalleras (cierres) y cordones'];
  P9Seleccionada: string|undefined;
  P9: string[] = ['Incontinente, (o necesita que le suministren enema)'
  , 'Accidente excepcional (1 por semana)',
'Continente'];
  P10Seleccionada: string|undefined;
  P10: string[] = ['Incontinente o sondado incapaz de cambiarse la bolsa'
  , ' Accidente excepcional (máximo 1 por 24 horas)'
  ,'Continente, durante al menos 7 días.'];
  constructor(private formBuilder:FormBuilder) {   
      this.buildForm();
      this.indice = "Test Barthel"
     }


  ngOnInit(): void {
    this.start();
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
    });
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
            if (this.hora == 24) {
              this.hora = 0;
            }
          } 
        }
        if(this.segundos<10){
          this.seg="0"+this.segundos;
        }else if(this.segundos>=10){
          this.seg=""+this.segundos;
        }
        
        if(this.minutos<10){
          this.min="0"+this.minutos;
        }else if(this.minutos>=10){
          this.min=""+this.minutos;
        }

        if(this.hora<10){
          this.hr="0"+this.hora;
        }else if(this.hora>=10){
          this.hr=""+this.hora;
        }
      }, 1000);
    }
  }

  stop(){
    clearInterval(this.contador);
    this.hr;
    this.min;
    this.seg;
    this.contador=null;
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

  mostrar(selector:any, visible:boolean) {
    var elemento = document.querySelector(selector);
    console.log(elemento);
    if (elemento != null) {
      elemento.style.display = visible?'block':'none';
    }
  }
}
