import { Injectable } from '@angular/core';
import { DatabaseService } from './db/database.service';
import { ModelService } from './model/model.service';
import { WeatherService } from './WeatherService/weather.service';
import { EthcontractService } from './ethcontract.service';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  getFarmerByAddress(address) {
    return
  }
  maxSafeAvocadoTemp = 311

  constructor(private databaseService: DatabaseService,
    private modelService: ModelService,
    private weatherService: WeatherService,
    private ethContractService: EthcontractService) { }
  calculatePayment(address) {
    let farmer = this.databaseService.getFarmerByAddress(address);
    let contract = this.databaseService.getContract(address);
    const premium = contract.premium

    const probSuccess = this.modelService.getProb({
      // week: moment().week(),
      week: "",
      minTemp: 58,
      rainfall: 76,
      sunlightExposure: 43.22,
      elevation: 49.33,
      experience: contract.experience,
      size_of_farm: contract.size,
      technique: contract.technique === 'hand' ? 0 : 1,
      disease: 0
    })
  }
  checkForCropFailure(force) {
    let weatherInfo = this.weatherService.getWeatherInfo().subscribe((response) => {
      console.log("response is :", response)
    });
    console.log(weatherInfo);
    // const maxTemp = weatherInfo.main.temp_max;
    const maxTemp = 500;

    if (maxTemp >= this.maxSafeAvocadoTemp || force) {
      let addresses = this.databaseService.getActiveFarmersEthAdd();
      console.log("Active farmers are: ", addresses);

      for (let address of addresses) {
        let paymentAmount = this.calculatePayment(address)

        this.ethContractService.disbursePayment(address, paymentAmount);
        this.databaseService.deactivateFarmer(address);


      }

    } else {
      return 'Max temp today was ${Math.round(9 / 5 * (maxTemp - 273) + 32)}°F which is less than 100°F, the maximum safe temperature for acocados'
    }




  }


}
