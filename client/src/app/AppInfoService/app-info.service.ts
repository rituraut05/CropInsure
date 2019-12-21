import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {
  private currentFarmerEthAddress;
  private currentInsurerEthAddress;
  constructor() { }
  getCurrentFarmerEthAddress() {
    return this.currentFarmerEthAddress;
  }
  setCurrentFarmerEthAddress(currentFarmerEthAddress) {
    this.currentFarmerEthAddress = currentFarmerEthAddress;
  }
  getCurrentInsurerEthAddress() {
   return this.currentInsurerEthAddress;
  }
  setCurrentInsurerEthAddress(currentInsurerEthAddress) {
    this.currentInsurerEthAddress = currentInsurerEthAddress;
   }
}
