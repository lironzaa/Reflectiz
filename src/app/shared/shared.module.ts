import { NgModule } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ColorPickerModule } from "ngx-color-picker";

import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { ErrorInputComponent } from "./components/inputs/error-input/error-input.component";
import { SelectInputComponent } from "./components/inputs/select-input/select-input.component";
import { DateInputComponent } from "./components/inputs/date-input/date-input.component";
import { RadioInputComponent } from "./components/inputs/radio-input/radio-input.component";
import { ColorPickerComponent } from "./components/inputs/color-picker/color-picker.component";

@NgModule({
  declarations: [
    ErrorInputComponent,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    RadioInputComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    ColorPickerModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    RadioInputComponent,
    ColorPickerComponent
  ]
})
export class SharedModule {
}
