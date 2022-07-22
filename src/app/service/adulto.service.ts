import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adulto } from '../models/adulto';

@Injectable({
  providedIn: 'root'
})
export class AdultoService {

  url = 'http://localhost:3000/api/adulto';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarProducto(producto: Adulto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
