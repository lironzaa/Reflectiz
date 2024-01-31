import { Component, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from "@angular/forms";

import { InputError } from "../../../interfaces/input-error";

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: [ './radio-input.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class RadioInputComponent {
  @Input() formField?: AbstractControl | null;
  @Input() customFormControlName: string = '';
  @Input() formSubmitted = false;
  @Input() placeholder!: string;
  @Input() errors: InputError[] = [];
  @Input() options: any[] = [];
}
