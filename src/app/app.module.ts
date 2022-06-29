import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ADULTOMAYORComponent } from './adulto-mayor/adulto-mayor.component';
import { VistaComponent } from './vista/vista.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  
  declarations: [
    AppComponent,
    ADULTOMAYORComponent,
    VistaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
