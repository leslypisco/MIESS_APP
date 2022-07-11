import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceBarthelComponent } from './indice-barthel/indice-barthel.component';
import { TestBarthelComponent } from './test-barthel/test-barthel.component';
import { TestEscalaYesavageComponent } from './test-escala-yesavage/test-escala-yesavage.component';



const routes: Routes = [
  { path: 'TestBarthel', component: TestBarthelComponent },
  { path: 'IndiceBarthel', component: IndiceBarthelComponent },
  { path: 'TestYesavage', component: TestEscalaYesavageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
