import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url: string = "http://localhost:8080/api/v1/position";

  constructor(private http: HttpClient) { }

  getRegistros(page: number): Observable<any> {
    return this.http.get(this.url + '/page/' + page);
  }

  create(registro: Registro) {
    return this.http.post(this.url, registro);
  }

  update(registro: Registro) {
    return this.http.put(this.url + '/' + registro.id, registro);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }


}
