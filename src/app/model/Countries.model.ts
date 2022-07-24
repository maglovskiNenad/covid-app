import { Country } from './Country.model';

export class Countries {
  rawData: Country[] = [];
  constructor(obj?: any) {
    this.rawData =
      obj &&
      obj.rawData &&
      obj.rawData.map((elem: any) => {
        return new Country(elem);
      });
  }
}
