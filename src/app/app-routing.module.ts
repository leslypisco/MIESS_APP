import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestMinimentalComponent } from './test-minimental/test-minimental.component';
import { MenuFormComponent } from './menu-form/menu-form.component';

const routes: Routes = [
  { path: 'Minimental', component: TestMinimentalComponent },
  { path: 'Encabezado', component: MenuFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
