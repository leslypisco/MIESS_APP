import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceLawtonComponent } from './indice-lawton/indice-lawton.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { TestLawtonComponent } from './test-lawton/test-lawton.component';

const routes: Routes = [
  { path: 'IndiceLawton', component: IndiceLawtonComponent },
  { path: 'Encabezado', component: MenuFormComponent },
  { path: 'TestLawton', component: TestLawtonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
