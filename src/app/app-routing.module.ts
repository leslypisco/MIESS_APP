import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceBarthelComponent } from './indice-barthel/indice-barthel.component';
import { TestBarthelComponent } from './test-barthel/test-barthel.component';
import { MenuFormComponent } from './menu-form/menu-form.component';


const routes: Routes = [
  { path: 'TestBarthel', component: TestBarthelComponent },
  { path: 'IndiceBarthel', component: IndiceBarthelComponent },
  { path: 'Encabezado', component: MenuFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
