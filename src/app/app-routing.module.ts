import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EscalaYesavageComponent } from './escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './test-escala-yesavage/test-escala-yesavage.component';

const routes: Routes = [
  {path: 'escala-yesavage', component:EscalaYesavageComponent},
  {path: 'test-escala-yesavage', component:TestEscalaYesavageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
