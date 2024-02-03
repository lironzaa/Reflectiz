import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor() { }

  incrementTotalVisitors(): void {
    let totalVisitors: number = JSON.parse(localStorage.getItem('totalVisitors')!);
    const updatedTotalVisitors = totalVisitors + 1;
    localStorage.setItem('totalVisitors', updatedTotalVisitors.toString());
  }

  incrementFormSubmissions(): void {
    let formSubmissions: number = JSON.parse(localStorage.getItem('formSubmissions')!);
    const updatedFormSubmissions = formSubmissions + 1;
    localStorage.setItem('formSubmissions', updatedFormSubmissions.toString());
  }

  getStatisticsData(): {
    totalVisitors: string,
    formSubmissions: string,
  } {
    return {
      totalVisitors: localStorage.getItem('totalVisitors') || "0",
      formSubmissions: localStorage.getItem('formSubmissions') || "0"
    }
  }
}
