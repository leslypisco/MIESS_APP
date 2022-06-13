import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTecnicoComponent } from './components/crear-tecnico/crear-tecnico.component';
import { ModificarTecnicoComponent } from './components/modificar-tecnico/modificar-tecnico.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { ListaModificarUsuarioComponent } from './components/lista-modificar-usuario/lista-modificar-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTecnicoComponent,
    ModificarTecnicoComponent,
    ListarUsuariosComponent,
    ListaModificarUsuarioComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
