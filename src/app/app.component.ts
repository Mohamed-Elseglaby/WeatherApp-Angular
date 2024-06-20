import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData: any;
  location: string = 'Alexandria';

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentWeather(this.location);
  }
  onSubmut() {
    this.getCurrentWeather(this.location);
    console.log(this.location);
    this.location = '';
  }
  getCurrentWeather(location: string): void {
    this.weatherService.getCurrentWeather(location).subscribe(
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
