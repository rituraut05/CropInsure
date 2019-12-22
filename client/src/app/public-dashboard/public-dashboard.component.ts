import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-dashboard',
  templateUrl: './public-dashboard.component.html',
  styleUrls: ['./public-dashboard.component.css']
})
export class PublicDashboardComponent implements OnInit {

  constructor() { }
  option = "lazy";
  showWalletBalance = true;
  showWalletTransaction = false;
  showWalletOffers = false;
  walletBalance = 1000
  showWalletOffersToggle() {
    this.showWalletBalance = false;
    this.showWalletOffers = true;
    this.showWalletTransaction = false;
  }
  showWalletBalanceToggle() {
    this.showWalletBalance = true;
    this.showWalletOffers = false;
    this.showWalletTransaction = false;
    this.walletBalance = 1000
  }
  showWalletTransactionsToggle() {
    this.showWalletBalance = false;
    this.showWalletOffers = false;
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
