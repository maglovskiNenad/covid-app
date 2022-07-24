import { Component, OnInit } from '@angular/core';
import { Countries } from '../model/Countries.model';
import { CovidAppService } from '../service/covid-app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private service: CovidAppService) {}

  term: any;

  countries: Countries = new Countries();

  totalLength: any;
  page: number = 1;

  getCounties(): void {
    this.service.getAllCountries().subscribe({
      next: (countries: Countries) => {
        this.countries = countries;
        this.totalLength = countries.rawData.length;
      },
      error: (err?: any) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getCounties();
  }
}
