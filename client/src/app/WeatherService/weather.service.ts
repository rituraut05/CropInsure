import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
  getWeatherInfo() {
    console.log("getting weather data")
    let weather: any;
    return this.httpClient.get("http://samples.openweathermap.org/data/2.5/weather?q=california&appid=b489d75d3faca95a1d3b49cb7b7757c9", { observe: 'response', responseType: 'json' });
  }
}
