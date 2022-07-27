import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  user = {
    tec_cedula: '',
    tec_contrasenia: '',
  }
  userSup = {
    sup_cedula: '',
    sup_contrasenia: '',
  }

  @Input() indice: string | undefined;

  constructor(private authService: AuthService,
    private router: Router) { 
    }

  ngOnInit(): void {
  }
  sigIntec(){
    this.authService.signIn(this.user)
      .subscribe(res => {
        console.log(res[0]._id);
        this.router.navigate(['/listar-usuarios/'+res[0]._id])   
      },
        err => console.log(err.error)
      )
  }

  sigInSup(){
    this.authService.signIn(this.userSup)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        /* ir a la ventana de menu */
        /* this.router.navigate(['/menu']) */
      },
        err => console.log(err)
      )
  }

  signIn(inputValue:string) {
    console.log(inputValue);
    if(inputValue =="1"){
      
      //this.router.navigate(['/listar-usuarios']);
      
    }else if(inputValue =="2"){
    console.log("opcion 2");
    this.sigIntec()
    //this.router.navigate(['/listar-usuarios']);
  }else{
    console.log("err");
  }
  }




}