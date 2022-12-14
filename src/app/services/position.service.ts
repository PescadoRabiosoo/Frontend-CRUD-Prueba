import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url: string = "http://localhost:8080/api/v1/position";

  constructor(private http: HttpClient) { }

  getRegistros(page: number): Observable<any> {
    return this.http.get(this.url + '/page/' + page);
  }

}
