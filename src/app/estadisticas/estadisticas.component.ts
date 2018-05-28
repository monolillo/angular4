import { ProductCatalog } from '../entidades/productcatalog';
import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from './estadisticas.service';

import { EQUIPOS } from '../mocks/equipos-mock';

@Component({
  selector: 'app-equipos',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
  providers: [EstadisticasService]
})
export class EstadisticasComponent implements OnInit {

  productosCatalog: ProductCatalog[];

  constructor(
    private estadisticasService: EstadisticasService
  ) { }

  ngOnInit() {
    this.estadisticasService.getAllProducts().subscribe(data => {
      this.productosCatalog = data;
    })
  }
}
