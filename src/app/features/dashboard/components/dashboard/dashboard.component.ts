import { Component, OnInit } from '@angular/core';

import { CarService } from "../../../../shared/services/car.service";
import { StatisticsService } from "../../../../shared/services/statistics.service";
import { Car } from "../../../landing/interfaces/car";
import { Genders } from "../../../../shared/enums/genders";
import { MotorTypes } from "../../../../shared/enums/motorTypes";
import { GenderOptions } from "../../../../shared/data/genderOptions";
import { HobbiesOptions } from "../../../../shared/data/hobbiesOptions";
import { MotorTypeOptions } from "../../../../shared/data/motorTypeOptions";
import { ColumnsNamesArr, OrdersDetailsColumns } from "../../data/orders-details-columns";
import { DataTableColumn } from "../../../../shared/interfaces/data-table";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})

export class DashboardComponent implements OnInit {
  carsData: Car[] = [];

  genderOptions = GenderOptions;
  hobbiesOptions = HobbiesOptions;
  motorTypeOptions = MotorTypeOptions;
  citiesOptions: string[] = [];
  filledFormOptions: string[] = [ 'Visited landing page' ];

  // Charts Data
  motorTypesData: any = {};
  hobbiesData: any = {};
  citiesData: any = {};
  filledFormData: any = {};

  // Table Data
  columns: DataTableColumn[] = OrdersDetailsColumns;
  columnsNamesArr = ColumnsNamesArr;

  constructor(private carService: CarService, private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.setGraphs();
  }

  setGraphs(): void {
    this.carsData = this.carService.getCars();
    this.setGraphsStructure();
    this.setGraphsData();
    this.setGraphsOptions();
  }

  setGraphsStructure(): void {
    this.hobbiesOptions.forEach(hobby => this.hobbiesData[hobby] = 0);
    this.motorTypeOptions.forEach(motorType => this.motorTypesData[motorType] = { male: 0, female: 0 });
  }

  setGraphsData(): void {
    this.carsData.map(carData => {

      if (carData.motorType === MotorTypes.Electric) {
        carData.gender === Genders.Male ? this.motorTypesData.Electric.male += 1 : this.motorTypesData.Electric.female += 1;
      } else {
        carData.gender === Genders.Male ? this.motorTypesData.Fuel.male += 1 : this.motorTypesData.Fuel.female += 1;
      }

      carData.hobbies.forEach(hobby => this.hobbiesData[hobby] += 1);

      !Object.hasOwn(this.citiesData, carData.city) ? this.citiesData[carData.city] = 1 : this.citiesData[carData.city]++;
    })

    const statisticsData = this.statisticsService.getStatisticsData();

    this.filledFormData = {
      "Visited landing page": {
        "Visited landing page": statisticsData.totalVisitors,
      },
      "Filled car form": {
        "Filled car form": statisticsData.formSubmissions,
      }
    }
  }

  setGraphsOptions(): void {
    this.citiesOptions = Object.keys(this.citiesData);
  }
}
