import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
declare let require: any;
declare let window: any;
let tokenAbi = [
  {
    "constant": true,
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_funds",
        "type": "uint256"
      }
    ],
    "name": "depositFunds",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_recipient",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "disbursePayment",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "ownerWithdraw",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }
];
@Injectable({
  providedIn: 'root'
})
export class EthcontractService {
  private web3Provider: null
  private address = '0x6cE79737Ec7B0Eb9976A8B27a538D9fafc8CB669';
  private contracts: {}
  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    window.web3 = new Web3(this.web3Provider);
    console.log(window.web3)
  }
  getAccountInfo() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function (err, account) {
        if (err === null) {
          window.web3.eth.getBalance(account, function (err, balance) {
            if (err === null) {
              return resolve({ fromAccount: account, balance: window.web3.fromWei(balance, "ether") });
            } else {
              return reject("error!");
            }
          });
        }
      });
    });
  }

  createInsurance(

  ) {
    let that = this;
    var Client = window.web3.eth.contract(tokenAbi)
    var client = Client.at(this.address)
    client.depositFunds(10, {
      gas: 50000,
      from: window.web3.eth.accounts[1],
      value: window.web3.toWei(10, 'ether')
    }, function (err, transactionHash) {
      console.log("in script putmoneyincontract")
      console.log(window.web3.eth)

      console.log('transactionHash:', transactionHash)
    })
  }
  // createInsuranceTruffle() {
  //   let that = this;
  //   return new Promise((resolve, reject) => {
  //     let paymentContract = TruffleContract(tokenAbi);
  //     paymentContract.setProvider(that.web3Provider);
  //     paymentContract.deployed().then(function (instance) {
  //       return instance.depositFunds(10, {
  //         gas: 50000,
  //         from: window.web3.eth.accounts[1],
  //         value: window.web3.toWei(10, 'ether')
  //       }, function (err, transactionHash) {
  //         console.log("in script putmoneyincontract")
  //         console.log(window.web3.eth)

  //         console.log('transactionHash:', transactionHash)
  //       });
  //     }).then(function (status) {
  //       if (status) {
  //         return resolve({ status: true });
  //       }
  //     }).catch(function (error) {
  //       console.log(error);
  //       return reject("Error in transferEther service call");
  //     });
  //   });
  // }

}


