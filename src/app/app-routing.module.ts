import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EscalaYesavageComponent } from './escala_yesavage/escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './escala_yesavage/test-escala-yesavage/test-escala-yesavage.component';

const routes: Routes = [
  {path: 'escala-yesavage', component:EscalaYesavageComponent},
  {path: 'test-escala-yesavage', component:TestEscalaYesavageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
