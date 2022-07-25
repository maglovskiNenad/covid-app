import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { elementAt, map, Observable } from 'rxjs';
import { Countries } from '../model/Countries.model';

const baseUrl = 'https://coronavirus.m.pipedream.net';

@Injectable({
  providedIn: 'root',
})
export class CovidAppService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Countries> {
    return this.http.get(`${baseUrl}`).pipe(
      map((data: any) => {
        return new Countries(data);
      })
    );
  }
}
