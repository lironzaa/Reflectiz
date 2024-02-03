import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from "@angular/forms";

import { InputError } from "../../../interfaces/input-error";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: [ './color-picker.component.scss' ],
})
export class ColorPickerComponent {
  @Input() formField?: AbstractControl | null;
  @Input() placeholder: string = '';
  @Input() formSubmitted: boolean = false;
  @Input() errors: InputError[] = [];
  @Output() onColorPicked: EventEmitter<string> = new EventEmitter<string>();
  color!: string;

  onColorPickerChange(pickedColor: string) {
    this.onColorPicked.emit(pickedColor);
  }
}
