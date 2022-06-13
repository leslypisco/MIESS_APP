import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTecnicoComponent } from './components/crear-tecnico/crear-tecnico.component';
import { ListaModificarUsuarioComponent } from './components/lista-modificar-usuario/lista-modificar-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { ModificarTecnicoComponent } from './components/modificar-tecnico/modificar-tecnico.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';


const routes: Routes = [
  { path: 'crearTecnico', component: CrearTecnicoComponent},
  { path: 'listaModificar', component: ListaModificarUsuarioComponent },
  { path: 'modificarTecnico/:id', component: ModificarTecnicoComponent },
  { path: 'users', component: ListarUsuariosComponent  },
  { path: 'ubicacion/:id', component: UbicacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
