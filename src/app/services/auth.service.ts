import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private URL = 'http://localhost:4000/LoginTecnico';
  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: any) {
    return this.http.post<any>(this.URL + '/signIn', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }



}