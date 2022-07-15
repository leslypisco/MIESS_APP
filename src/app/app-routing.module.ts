import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionTecnicosComponent } from './informacion-tecnicos/informacion-tecnicos.component';
import { ListarTecnicosComponent } from './listar-tecnicos/listar-tecnicos.component';


const routes: Routes = [
  { path: 'tecnicos', component: ListarTecnicosComponent  },
  { path: '', pathMatch: 'full', redirectTo: 'tecnicos' },
  { path:'info_tecnicos', component:  InformacionTecnicosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
