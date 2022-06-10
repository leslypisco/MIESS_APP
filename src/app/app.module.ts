import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscalaYesavageComponent } from './escala_yesavage/escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './escala_yesavage/test-escala-yesavage/test-escala-yesavage.component';

@NgModule({
  declarations: [
    AppComponent,
    EscalaYesavageComponent,
    TestEscalaYesavageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
