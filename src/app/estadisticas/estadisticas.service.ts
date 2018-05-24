import { Injectable } from '@angular/core';
import { constantes } from '../constantes/constantes';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstadisticasService {

  constructor(
    private http: HttpClient
  ) {}

  public getAllProducts() {
    this.http.get('').subscribe(
      data => {
        return data;
      })
  }
}
