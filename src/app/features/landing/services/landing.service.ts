import { Injectable } from '@angular/core';

import { Car } from "../interfaces/car";

@Injectable({
  providedIn: 'root'
})

export class LandingService {
  constructor() { }

  getCars(): Car[] {
    const currentCars: Car[] = JSON.parse(localStorage.getItem('cars')!);
    return currentCars || [];
  }

  orderCar(car: Car): void {
    console.log(car);
    const currentCars = this.getCars();
    console.log(currentCars);
    const updatedCars = [ ...currentCars, car ];
    console.log(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  }
}
