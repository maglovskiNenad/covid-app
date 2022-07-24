import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/model/Country.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() country: Country = new Country();

  constructor() {}

  ngOnInit(): void {}
}
