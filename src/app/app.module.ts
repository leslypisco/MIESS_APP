import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscalaYesavageComponent } from './escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './test-escala-yesavage/test-escala-yesavage.component';

@NgModule({
  declarations: [
    AppComponent,
    EscalaYesavageComponent,
    TestEscalaYesavageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
