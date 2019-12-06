import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;

let smartContractAbi = require('./SmartContract.json');
@Injectable({
  providedIn: 'root'
})



export class ContractService {
  private _account: string = null;
  private _web3: any;

  private _SmartContract: any;
  private _SmartContractAddress: string = "0x4CA5792c99B6ee90E9671eBa8373d90bB35b949c";

  constructor() {

    // Use Mist/MetaMask's provider

    this._web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
    console.log("web3", this._web3.eth)


    this._SmartContract = this._web3.eth.contract(smartContractAbi).at(this._SmartContractAddress);
  }
}
