export class Country {
  FIPS: string;
  Admin2: string;
  Province_State: string;
  Country_Region: string;
  Last_Update: string;
  Lat: number;
  Long_: number;
  Confirmed: number;
  Deaths: number;
  Recovered: string;
  Active: string;
  Combined_Key: string;
  Incident_Rate: number;
  Case_Fatality_Ratio: number;
  constructor(obj?: any) {
    this.FIPS = (obj && obj.FIPS) || '';
    this.Admin2 = (obj && obj.Admin2) || '';
    this.Province_State = (obj && obj.Province_State) || '';
    this.Country_Region = (obj && obj.Country_Region) || '';
    this.Last_Update = (obj && obj.Last_Update) || '';
    this.Lat = (obj && obj.Lat) || 0;
    this.Long_ = (obj && obj.Long_) || 0;
    this.Confirmed = (obj && obj.Confirmed) || 0;
    this.Deaths = (obj && obj.Deaths) || 0;
    this.Recovered = (obj && obj.Recovered) || '';
    this.Active = (obj && obj.Active) || '';
    this.Combined_Key = (obj && obj.Combined_Key) || '';
    this.Incident_Rate = (obj && obj.Incident_Rate) || 0;
    this.Case_Fatality_Ratio = (obj && obj.Case_Fatality_Ratio) || 0;
  }
}
