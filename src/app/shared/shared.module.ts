import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";
import { ColorPickerModule } from "ngx-color-picker";
import { NgChartsModule } from "ng2-charts";

import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { ErrorInputComponent } from "./components/inputs/error-input/error-input.component";
import { SelectInputComponent } from "./components/inputs/select-input/select-input.component";
import { DateInputComponent } from "./components/inputs/date-input/date-input.component";
import { RadioInputComponent } from "./components/inputs/radio-input/radio-input.component";
import { ColorPickerComponent } from "./components/inputs/color-picker/color-picker.component";
import { GraphComponent } from './components/graph/graph/graph.component';
import { DataTableComponent } from './components/tables/table/data-table.component';
import { TitlePipe } from './pipes/title.pipe';

@NgModule({
  declarations: [
    ErrorInputComponent,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    RadioInputComponent,
    ColorPickerComponent,
    GraphComponent,
    DataTableComponent,
    TitlePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Mat Modules
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,

    // Libraries
    ColorPickerModule,
    NgChartsModule,
  ],
  exports: [
    ReactiveFormsModule,

    // Mat Modules
    MatButtonModule,
    MatTabsModule,

    // Components
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    RadioInputComponent,
    ColorPickerComponent,
    GraphComponent,
    DataTableComponent
  ]
})
export class SharedModule {
}
