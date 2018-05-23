import { EstadisticasComponent }     from './estadisticas/estadisticas.component';
import { NoticiasComponent }         from './noticias/noticias.component';
import { NgModule }                  from '@angular/core';
import { RouterModule, Routes }      from '@angular/router';

const appRoutes: Routes = [
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'noticias', component: NoticiasComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting { }
