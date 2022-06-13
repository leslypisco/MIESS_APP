import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-crear-tecnico',
  templateUrl: './crear-tecnico.component.html',
  styleUrls: ['./crear-tecnico.component.scss']
})
export class CrearTecnicoComponent implements OnInit {


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


}
