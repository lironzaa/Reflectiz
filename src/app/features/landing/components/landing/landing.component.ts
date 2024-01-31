import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { EMAIL_REGEX } from "../../../../shared/regex/regex";
import { LandingFormErrorsData } from "../../data/landing-form-errors-data";
import { LandingService } from "../../services/landing.service";
import { ToastService } from "../../../../shared/services/toast.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmitted = false;
  landingFormErrors = LandingFormErrorsData;
  genderOptions = [ 'Male', 'Female' ];
  hobbiesOptions = [ 'Reading', 'Painting', 'Gardening', 'Cooking', 'Photography', 'Hiking', 'Playing a Musical Instrument', 'Bird Watching', 'Chess', 'Yoga' ];
  seatsAmountOptions = [ 2, 3, 4, 5, 6, 7 ];
  motorTypeOptions = [ "Electric", "Fuel" ];

  constructor(private fb: FormBuilder, private landingService: LandingService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.initLandingForm();
  }

  initLandingForm(): void {
    this.loginForm = this.fb.group({
      'fullName': [ null, [ Validators.required, Validators.minLength(2) ] ],
      'gender': [ null, [ Validators.required ] ],
      'email': [ null, [ Validators.required, Validators.pattern(EMAIL_REGEX) ] ],
      'birthDate': [ null, [ Validators.required ] ],
      'address': [ null, [ Validators.required ] ],
      'city': [ null, [ Validators.required ] ],
      'country': [ null, [ Validators.required ] ],
      'hobbies': [ null, [ Validators.required ] ],
      'favoriteColor': [ null, [ Validators.required ] ],
      'seatsAmount': [ null, [ Validators.required ] ],
      'motorType': [ null, [ Validators.required ] ],
    });
  }

  onColorPicked(pickedColor: string): void {
    this.loginForm.get('favoriteColor')?.setValue(pickedColor);
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.landingService.orderCar(this.loginForm.value);
      this.toastService.showMessage('Your request was sent, soon you will receive a mail the perfect match for you!');
      this.loginForm.reset();
    }
  }
}
