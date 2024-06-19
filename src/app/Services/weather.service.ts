import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://open-weather13.p.rapidapi.com/city/landon'; // Example URL
  private apiKey = '81f2f88e1bmsh3db6c0da63af011p1055a8jsnaf9d3f3ff835';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
    });

    const params = new HttpParams().set('city', city);

    return this.http.get(this.apiUrl, { headers, params });
  }
}
