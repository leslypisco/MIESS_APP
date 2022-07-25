import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestYesavage } from '../models/test-yesavage'

@Injectable({
  providedIn: 'root'
})
export class YesavageService {

  url= 'http://localhost:3000/test_yesavage';

  constructor(private http: HttpClient) { }

  guardarTest(test: TestYesavage): Observable<any> {
    return this.http.post(this.url, test);
  }
}
