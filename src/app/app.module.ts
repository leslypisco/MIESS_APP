import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ADULTOMAYORComponent } from './adulto-mayor/adulto-mayor.component';


@NgModule({
  
  declarations: [
    AppComponent,
    ADULTOMAYORComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
