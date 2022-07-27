import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAdultoComponent } from './components/crear-adulto/crear-adulto.component';
import { ListaModificarUsuarioComponent } from './components/lista-modificar-usuario/lista-modificar-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { ModificarAdultoComponent } from './components/modificar-adulto/modificar-adulto.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';


const routes: Routes = [
  { path: 'crearAdulto', component: CrearAdultoComponent},
  { path: 'listaModificar', component: ListaModificarUsuarioComponent },
  { path: 'modificarAdulto/:id', component: ModificarAdultoComponent },
  { path: 'users', component: ListarUsuariosComponent  },
  { path: 'ubicacion/:id', component: UbicacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
