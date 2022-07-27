import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiniMental } from '../models/MiniMental';

@Injectable({
  providedIn: 'root'
})
export class MiniMentalService {

  url = '/api/MiniMental';
  constructor(private http:HttpClient) { }
  
  guardarMinimental(miniMental: MiniMental): Observable<any> {
    return this.http.post(this.url, miniMental);
  }
}

