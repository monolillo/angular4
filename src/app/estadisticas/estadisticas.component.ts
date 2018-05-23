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

  equipos = this.estadisticasService.getAllProducts();

  constructor(
    private estadisticasService: EstadisticasService
  ) { }

  ngOnInit() {
  }
}
