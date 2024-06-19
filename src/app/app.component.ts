import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  weatherData: any;
  city: string = 'London';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
