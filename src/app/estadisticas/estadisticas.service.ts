import { Injectable } from '@angular/core';
import { constantes } from '../constantes/constantes';
import { ProductCatalog } from '../entidades/productcatalog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EstadisticasService {

  constructor(
    private http: HttpClient
  ) {}

  getAllProducts(): Observable<ProductCatalog[]> {
    return this.http.get<ProductCatalog[]>('http://localhost:8080/rest/site/4/product');
  }
}
