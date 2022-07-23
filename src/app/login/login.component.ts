import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

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

  @Input() indice: string | undefined;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.user)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        /* ir a la ventana de menu */
        /* this.router.navigate(['/menu']) */

      
      },
        err => console.log(err)
      )

  }


}