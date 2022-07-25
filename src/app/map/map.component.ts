import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Countries } from '../model/Countries.model';
import { CovidAppService } from '../service/covid-app.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: any;

  icon = {
    icon: L.icon({
      iconSize: [41, 51],
      iconAnchor: [20, 51],
      popupAnchor: [0, -50],
      iconUrl: 'assets/images/marker-icon.png',
      shadowUrl: 'assets/images/marker-shadow.png',
    }),
  };

  private initMap(): void {
    this.map = L.map('map', {
      zoom: 3,
      zoomSnap: 0.25,
    }).setView([51.509865, -0.118092], 5);

    // TEST MARKER
    // L.marker([51.509865, -0.118092], this.icon)
    //   .addTo(this.map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor(private service: CovidAppService) {}

  ngOnInit(): void {}

  country: Countries = new Countries();

  showOnMap(): void {
    this.service.getAllCountries().subscribe({
      next: (countries: Countries) => {
        this.country = countries;
        this.country.rawData.map((e) => {
          L.marker([e.Lat, e.Long_], this.icon)
            .addTo(this.map)
            .bindPopup(`${e.Country_Region}` + '<br>' + `${e.Deaths}`)
            .openPopup();
        });
      },
    });
  }
  ngAfterViewInit(): void {
    this.showOnMap();
    this.initMap();
  }
}
