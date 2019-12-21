import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-dashboard',
  templateUrl: './public-dashboard.component.html',
  styleUrls: ['./public-dashboard.component.css']
})
export class PublicDashboardComponent implements OnInit {

  constructor() { }
  option = "lazy";
  showWalletBalance = false;
  showWalletTransaction = false;
  showManageInsurance = true;
  walletBalance = 1000
  showManageInsurancesToggle(){
    this.showWalletBalance = false;
    this.showManageInsurance = true;
    this.showWalletTransaction = false;
  }
  showWalletBalanceToggle() {
    this.showWalletBalance = true;
    this.showManageInsurance = false;
    this.showWalletTransaction = false;
    this.walletBalance = 1000
  }
  showWalletTransactionToggle() {
    this.showWalletBalance = false;
    this.showManageInsurance = false;
    this.showWalletTransaction = true;
    this.walletBalance = 1000
  }
  transactions = [
    {
      farmer: "Ganpatrao Patil",
      date: '12/12/2019',
      debit: '500',
      credit: '-',
      type: 'Rupees'
    },
    {
      farmer: "Ganpatrao Patil",
      date: '12/12/2019',
      debit: '500',
      credit: '-',
      type: 'Rupees'
    },
    {
      farmer: "Ganpatrao Patil",
      date: '12/12/2019',
      debit: '500',
      credit: '-',
      type: 'CropCoin'
    }
  ]
  ngOnInit() {
  }

}
