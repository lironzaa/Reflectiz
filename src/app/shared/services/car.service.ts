import { Injectable } from '@angular/core';

import { Car } from "../../features/landing/interfaces/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() { }

  getCars(): Car[] {
    const currentCars: Car[] = JSON.parse(localStorage.getItem('cars')!);
    return currentCars || [];
  }

  orderCar(car: Car): void {
    const currentCars = this.getCars();
    const updatedCars = [ ...currentCars, car ];
    localStorage.setItem('cars', JSON.stringify(updatedCars));
  }
}
