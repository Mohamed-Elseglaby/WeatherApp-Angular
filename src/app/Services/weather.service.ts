import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private apiKey = 'dfa716b6fd55480a86a213604241906';

  constructor(public http: HttpClient) {}

  getCurrentWeather(location: string): Observable<any> {
    const params = new HttpParams().set('key', this.apiKey).set('q', location);

    return this.http.get(this.apiUrl, { params });
  }
}
