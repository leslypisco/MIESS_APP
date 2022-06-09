import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarTecnicoComponent } from './supervisor/registrar-tecnico/registrar-tecnico.component';
import { ListarTecnicosComponent } from './supervisor/listar-tecnicos/listar-tecnicos.component';
import { InfoSupervisorComponent } from './supervisor/info-supervisor/info-supervisor.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrarTecnicoComponent,
    ListarTecnicosComponent,
    InfoSupervisorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
