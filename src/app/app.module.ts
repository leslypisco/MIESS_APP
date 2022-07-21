import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ADULTOMAYORComponent } from './adulto-mayor/adulto-mayor.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  
  declarations: [
    AppComponent,
    ADULTOMAYORComponent,
    MenuFormComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
