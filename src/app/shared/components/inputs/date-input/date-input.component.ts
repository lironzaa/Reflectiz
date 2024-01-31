import { Component, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from "@angular/forms";

import { InputError } from "../../../interfaces/input-error";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: [ './date-input.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class DateInputComponent {
  @Input() formField?: AbstractControl | null;
  @Input() customFormControlName: string = '';
  @Input() formSubmitted = false;
  @Input() placeholder!: string;
  @Input() errors: InputError[] = [];
}
