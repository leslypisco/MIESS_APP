import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ADULTOMAYORComponent } from './adulto-mayor/adulto-mayor.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  
  declarations: [
    AppComponent,
    ADULTOMAYORComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
