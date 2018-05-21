import { Component, OnInit } from '@angular/core';

import { EQUIPOS } from '../mocks/equipos-mock';

@Component({
  selector: 'app-equipos',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  
  equipos = EQUIPOS;

  constructor() { }

  ngOnInit() {
  }

}
