import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearAdultoComponent } from './components/crear-adulto/crear-adulto.component';
import { ModificarAdultoComponent } from './components/modificar-adulto/modificar-adulto.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { ListaModificarUsuarioComponent } from './components/lista-modificar-usuario/lista-modificar-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common'

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CrearAdultoComponent,
    ModificarAdultoComponent,
    ListarUsuariosComponent,
    ListaModificarUsuarioComponent,
    UbicacionComponent,
    MenuComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    // Token interceptor
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
