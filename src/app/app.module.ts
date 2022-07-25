import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { EscalaYesavageComponent } from './escala_yesavage/escala-yesavage/escala-yesavage.component';
import { TestEscalaYesavageComponent } from './escala_yesavage/test-escala-yesavage/test-escala-yesavage.component';
import { MenuComponent } from './menu/menu.component';
import { MenuFormComponent } from './menu-form/menu-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EscalaYesavageComponent,
    TestEscalaYesavageComponent,
    MenuComponent,
    MenuFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
