import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { EMAIL_REGEX } from "../../../../shared/regex/regex";
import { LandingFormErrorsData } from "../../data/landing-form-errors-data";
import { ToastService } from "../../../../shared/services/toast.service";
import { CarService } from "../../../../shared/services/car.service";
import { GenderOptions } from "../../../../shared/data/genderOptions";
import { MotorTypeOptions } from "../../../../shared/data/motorTypeOptions";
import { HobbiesOptions } from "../../../../shared/data/hobbiesOptions";
import { SeatsAmountOptions } from "../../../../shared/data/seatsAmountOptions";
import { StatisticsService } from "../../../../shared/services/statistics.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmitted = false;
  landingFormErrors = LandingFormErrorsData;
  genderOptions = GenderOptions;
  hobbiesOptions = HobbiesOptions;
  seatsAmountOptions = SeatsAmountOptions;
  motorTypeOptions = MotorTypeOptions;

  constructor(private fb: FormBuilder, private carService: CarService,
              private toastService: ToastService, private router: Router,
              private statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.initLandingForm();
    this.statisticsService.incrementTotalVisitors();
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
      this.carService.orderCar(this.loginForm.value);
      this.statisticsService.incrementFormSubmissions();
      this.toastService.showMessage('Your request was sent, soon you will receive a mail the perfect match for you!');
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([ '/' ])
    }
  }
}
