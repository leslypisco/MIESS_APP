import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adulto } from '../models/Adulto';

@Injectable({
  providedIn: 'root'
})
export class AdultosService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAdultos() {
    return this.http.get(`${this.URL}/adulto/`);
  }

  getAdultosCount() {
    return this.http.get(`${this.URL}/adulto/getCount`);
  }

  agregarAdulto(datosForm:any): Observable<any>{
    return this.http.post(`${this.URL}/adulto/`, datosForm);
  }

  getById(id:any):Observable<any>{
    return this.http.get(`${this.URL}/adulto/get/`+id);
  }

  editAdulto(id:any, datosAdulto: Adulto){
    return this.http.put(`${this.URL}/adulto/edit/`,id);
  }
}
