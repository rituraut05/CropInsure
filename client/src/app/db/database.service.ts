import { Injectable } from '@angular/core';
import { Farmer } from '../farmer.model';
import { Contract } from '../Contract.model';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  farmers = new Array<Farmer>();
  contracts = new Array<Contract>();
  constructor() { }
  getFarmers() {
    return this.farmers;

  }
  getFarmerByAddress(address) {
    return this.farmers[0]
  }
  getContract(address) {
    return this.contracts[0];
  }
  getActiveFarmersEthAdd() {
    return this.farmers;
  }
  deactivateFarmer(address) {

  }
}
