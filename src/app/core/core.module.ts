import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from './components/layout/header/header.component';
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterLink,
    MatIconModule
  ]
})
export class CoreModule { }
