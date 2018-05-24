import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { EstadisticasService } from './estadisticas/estadisticas.service';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadisticasComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [EstadisticasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
