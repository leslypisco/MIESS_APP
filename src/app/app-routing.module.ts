import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { EscalaYesavageComponent } from './escala_yesavage/escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './escala_yesavage/test-escala-yesavage/test-escala-yesavage.component';
import { MenuFormComponent } from './menu-form/menu-form.component';

const routes: Routes = [
  {path: '', component:MenuFormComponent},
  {path: 'escala-yesavage', component:EscalaYesavageComponent},
  {path: 'test-escala-yesavage', component:TestEscalaYesavageComponent},
  {path: 'app-menuform', component:MenuFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
