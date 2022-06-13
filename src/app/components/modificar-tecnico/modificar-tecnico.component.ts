import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-modificar-tecnico',
  templateUrl: './modificar-tecnico.component.html',
  styleUrls: ['./modificar-tecnico.component.scss']
})
export class ModificarTecnicoComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    private formBuilder:FormBuilder
  ) { 
    this.buildForm();
    /*this.form.valueChanges.pipe(debounceTime(500)).subscribe(value =>{
      console.log(value);
    })*/
  }

  ngOnInit(): void {

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required ]),
      gender: new FormControl('', [Validators.required])
    });

    
  }

  save(event: Event){
    event.preventDefault();
    if (this.form.valid) {
        const value = this.form.value;
        console.log(value);
    }else{
      this.form.markAllAsTouched();
    }

  }

  doSomething(){
    window.open("https://www.w3schools.com");
  }

  oldman = {
    odl0 : {
      'id': 1,
      'name': 'ABREU HERNANDEZ LUIS FELIPE',
      'edad': 85+'- Ultima Visita ',
  },
  odl1 : {
    'id': 2,
    'name': 'ABDO FRANCIS JUAN MIGUEL',
    'edad': 83+'- Ultima Visita ',
  },
  odl2 : {
    'id': 3,
    'name': 'BARROSO VILLA JUAN GERARDO',
    'edad': 75+'- Ultima Visita 30/06/2020',
  },
  odl3 : {
    'id': 4,
    'name': 'BECKER FAUSER INGEBORG DOROTHEA',
    'edad': 76+'- Ultima Visita 30/08/2020',

  },
  odl4 : {
    'id': 5,
    'name': 'CACERES LOPEZ JOSE ALEJANDRO',
    'edad': 90+'- Ultima Visita ',
  },
  odl6 : {
    'id': 6,
    'name': 'LOPEZ VIVANCO JOSE ALEJANDRO',
    'edad': 72+'- Ultima Visita ',
  }
  }; 
  data = Object.values(this.oldman);


}
