import { Component, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from "@angular/forms";

import { InputError } from "../../../interfaces/input-error";

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: [ './select-input.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class SelectInputComponent {
  @Input() formField?: AbstractControl | null;
  @Input() customFormControlName: string = '';
  @Input() formSubmitted = false;
  @Input() placeholder!: string;
  @Input() errors: InputError[] = [];
  @Input() options: any[] = [];
  @Input() isMultipleChoice = false;

  trackByOptionName(index: number, option: string) {
    return option;
  }
}
