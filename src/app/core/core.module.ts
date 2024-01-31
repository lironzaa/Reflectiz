import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterLink,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class CoreModule { }
