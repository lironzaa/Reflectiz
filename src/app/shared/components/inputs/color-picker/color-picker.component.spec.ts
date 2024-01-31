import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerComponent } from './color-picker.component';

describe('TextInputComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPickerComponent]
    });
    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
